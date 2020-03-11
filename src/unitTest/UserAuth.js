import chai, { expect } from "chai";
import * as  APIAction from "../actions";
import asserttype from "chai-asserttype";

chai.use(asserttype);

/**
 * 語法：https://www.chaijs.com/api/bdd/
 */

let APItoken = null;

describe('User Authorization', () => {
	let apiResponse = null;

	before(done => {
		// exec any process before
		APIAction.userLogin("jvd_autotest", "0987")
		.then(res => {
			apiResponse= res;
			APItoken = res.auth_token;
		})
		.catch(err => {
			apiResponse= err;
		})
		.finally(() => {
			done();
		})
	});

	describe('User Login/Post', function() {
		it('User Login', () => {
			expect(apiResponse).to.be.object();
			expect(Object.values(apiResponse)).to.have.lengthOf(6);

			expect(apiResponse).to.have.property("message");
			expect(apiResponse.message).to.not.be.empty;
			expect(apiResponse.message).to.be.string();

			expect(apiResponse).to.have.property("account");
			expect(apiResponse.account).to.not.be.empty;
			expect(apiResponse.account).to.be.string();

			expect(apiResponse).to.have.property("user_confirmed");
			expect(apiResponse.user_confirmed).to.be.boolean();

			expect(apiResponse).to.have.property("user_status");
			expect(apiResponse.user_status).to.not.be.empty;
			expect(apiResponse.user_status).to.be.string();
			expect(['active', 'sleep', 'suspend', 'closed']).to.include(apiResponse.user_status);

			expect(apiResponse).to.have.property("auth_token");
			expect(apiResponse.auth_token).to.not.be.empty;
			expect(apiResponse.auth_token).to.be.string();

			expect(apiResponse).to.have.property("has_notifications");
			expect(apiResponse.has_notifications).to.be.boolean();
		});
	});
});

describe('User Authorization', () => {
	let apiResponse = null;

	before(done => {
		// exec any process before
		APIAction.userLogout(APItoken)
		.then(res => {
			apiResponse= res;
		})
		.catch(err => {
			apiResponse= err;
		})
		.finally(() => {
			done();
		})
	});

	describe('User Logout/Post', function() {
		it('User Logout', () => {
			expect(apiResponse).to.be.object();
			expect(apiResponse).to.have.property("message");
			expect(apiResponse.message).to.not.be.empty;
			expect(apiResponse.message).to.be.string();
		});
	});
});

// describe('User Authorization', () => {
// 	let apiResponse = null;
// 	const serialNum = Math.floor(Math.random() * 10000);
// 	const apiParam = {
// 		account: `unitTest${serialNum}`,
// 		password: "1234",
// 		password_confirmation: "1234",
// 		referral_code: "brohand"
// 	}

// 	before(done => {
// 		// exec any process before
// 		APIAction.userSignup(apiParam)
// 		.then(res => {
// 			console.log(res)
// 			apiResponse= res;
// 		})
// 		.catch(err => {
// 			apiResponse= err;
// 		})
// 		.finally(() => {
// 			done();
// 		})
// 	});

// 	describe('User Signup/Post', function() {
// 		it('User Signup', () => {
// 			console.log(apiResponse)
// 			expect(apiResponse).to.be.object();
// 			expect(apiResponse).to.have.property("message");
// 			expect(apiResponse.message).to.not.be.empty;
// 			expect(apiResponse.message).to.be.string();
// 		});
// 	});
// });