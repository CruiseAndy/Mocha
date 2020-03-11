import chai, { expect } from "chai";
import * as  APIAction from "../actions";
import asserttype from "chai-asserttype";

chai.use(asserttype);

/**
 * 語法：https://www.chaijs.com/api/bdd/
 */

describe('Commmunity Public', () => {
	let apiResponse = null;
	const qaKindList = ['app', 'game', 'others', 'account', 'bank', 'deposit', 'withdrawal'];

	before(done => {
		// exec any process before
		APIAction.getQA()
		.then(res => {
      apiResponse = res;
		})
		.catch(err => {
			apiResponse = err;
		})
		.finally(() => {
			done();
		})
	});

	describe('Commmunity QA/Get', function() {
		it('Commmunity QA', () => {
			expect(apiResponse).to.be.object();
			
			Object.entries(apiResponse).map(item => {
				const [ kind, content ] = item;

				expect(qaKindList).to.include(kind);

				content.map(objItem => {
					expect(Object.values(objItem)).to.have.lengthOf(3);
  
					expect(objItem).to.have.property("order");
					expect(objItem.order).to.be.number();
  
					expect(objItem).to.have.property("question");
					expect(objItem.question).to.not.be.empty;
					expect(objItem.question).to.be.string();
  
					expect(objItem).to.have.property("answer");
					expect(objItem.answer).to.not.be.empty;
					expect(objItem.answer).to.be.string();
				})
			});
		});
	});
});

describe('Commmunity Public', () => {
	let apiResponse = null;
	
	before(done => {
		// exec any process before
		APIAction.getNews()
		.then(res => {
      apiResponse = res;
		})
		.catch(err => {
			apiResponse = err;
		})
		.finally(() => {
			done();
		})
	});

	describe('Commmunity News/Get', function() {
		it('Commmunity News', () => {
			expect(apiResponse).to.be.array();

			apiResponse.map(item => {
				expect(Object.values(item)).to.have.lengthOf(3);
  
				expect(item).to.have.property("title");
				expect(item.title).to.not.be.empty;
				expect(item.title).to.be.string();
  
				expect(item).to.have.property("content");
				expect(item.content).to.not.be.empty;
				expect(item.content).to.be.string();
  
				expect(item).to.have.property("updated_at");
				expect(item.updated_at).to.not.be.empty;
				expect(item.updated_at).to.be.string();
			});
		});
	});
});

describe('Commmunity Public', () => {
	let apiResponse = null;
	
	before(done => {
		// exec any process before
		APIAction.getCarousel()
		.then(res => {
      apiResponse = res;
		})
		.catch(err => {
			apiResponse = err;
		})
		.finally(() => {
			done();
		})
	});

	describe('Commmunity Slides/Get', function() {
		it('Commmunity Slides', () => {
			expect(apiResponse).to.be.array();

			apiResponse.map(item => {
				expect(Object.values(item)).to.have.lengthOf(3);
  
				expect(item).to.have.property("webImageUrl");
				expect(item.webImageUrl).to.not.be.empty;
				expect(item.webImageUrl).to.be.string();
  
				expect(item).to.have.property("mobileImageUrl");
				expect(item.mobileImageUrl).to.not.be.empty;
				expect(item.mobileImageUrl).to.be.string();
  
				expect(item).to.have.property("linkPath");
				expect(item.linkPath).to.be.string();
			});
		});
	});
});

describe('Commmunity Public', () => {
	let apiResponse = null;
	const registerCondition = [
		"account", "password", "password_confirmation",
		"email", "name", "id_number",
		"birth_day", "phone", "qq",
		"wechat", "referral_code"
	];
	const registerRequired = [ "required", "optional", "close" ];
	const categoryList = [ "sports", "casino", "egame", "lottery", "cockfight", "horserace", "poker", "esports" ];
	const gamePartnerList = [
		"ibcbet", "crownm", "sa", "allbet", "ebet",
		"pt", "mg", "tcg", "qtech", "n2",
		"agin", "gg", "s128cockfight", "r128horse", "imsb",
		"betlink", "xj_agile_bet", "kygaming", "vb", "gamingmart",
		"bole", "rmg", "dg", "sunbettgp"
	];
	
	before(done => {
		// exec any process before
		APIAction.getPreload()
		.then(res => {
      apiResponse = res;
		})
		.catch(err => {
			apiResponse = err;
		})
		.finally(() => {
			done();
		})
	});

	describe('Commmunity Preload/Get', function() {
		it('Commmunity Preload', () => {
			expect(apiResponse).to.be.object();
  
			expect(apiResponse).to.have.property("app_version");
			expect(apiResponse.app_version).to.be.string();
			expect(apiResponse.app_version).to.not.be.empty;
  
			expect(apiResponse).to.have.property("download_ipa_url");
			expect(apiResponse.download_ipa_url).to.be.string();
			expect(apiResponse.download_ipa_url).to.not.be.empty;
  
			expect(apiResponse).to.have.property("download_apk_url");
			expect(apiResponse.download_apk_url).to.be.string();
			expect(apiResponse.download_apk_url).to.not.be.empty;
  
			expect(apiResponse).to.have.property("redirect_download_url");
			expect(apiResponse.redirect_download_url).to.be.string();
			expect(apiResponse.redirect_download_url).to.not.be.empty;
			
			expect(apiResponse.register_column).to.be.object();

			Object.entries(apiResponse.register_column).map(item => {
				const [ kind, content ] = item;

				expect(registerCondition).to.include(kind);

				expect(content).to.be.object();
				expect(Object.values(content)).to.have.lengthOf(3);

				expect(content).to.have.property("status");
				expect(registerRequired).to.include(content.status);
				expect(content.status).to.be.string();
				expect(content.status).to.not.be.empty;

				expect(content).to.have.property("amend");
				expect([ "true", "false" ]).to.include(content.amend);
				expect(content.amend).to.be.string();
				expect(content.amend).to.not.be.empty;

				expect(content).to.have.property("on_signup");
				expect([ "true", "false" ]).to.include(content.on_signup);
				expect(content.on_signup).to.be.string();
				expect(content.on_signup).to.not.be.empty;
			})

			expect(apiResponse.confirmation_methods).to.be.array();
			expect(apiResponse.confirmation_methods).to.not.be.empty;

			apiResponse.confirmation_methods.map(item => {
				expect([ "email", "phone" ]).to.include(item);
			});

			expect(apiResponse.game_categories).to.be.object();
			Object.entries(apiResponse.game_categories).map(item => {
				const [ key, value ] = item;

				expect(categoryList).to.include(key);
				expect(value).to.be.string();
				expect(value).to.not.be.empty;
			});

			expect(apiResponse.game_partners).to.be.object();
			Object.entries(apiResponse.game_partners).map(item => {
				const [ key, value ] = item;

				expect(gamePartnerList).to.include(key);
				expect(value).to.be.string();
				expect(value).to.not.be.empty;
			});
		});
	});
});