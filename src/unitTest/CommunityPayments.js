import chai, { expect } from "chai";
import * as  APIAction from "../actions";
import asserttype from "chai-asserttype";

chai.use(asserttype);

/**
 * 語法：https://www.chaijs.com/api/bdd/
 */

describe('Commmunity Payments', () => {
  let apiResponse = null;

	before(done => {
		// exec any process before
		APIAction.getCompanyBankList()
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

	describe('Commmunity Card Banks/Get', function() {
		it('Commmunity Card Banks', () => {
      expect(apiResponse).to.be.array();

      apiResponse.map(item => {
        expect(item).to.be.object();
        expect(Object.values(item)).to.have.lengthOf(2);
  
        expect(item).to.have.property("code");
				expect(item.code).to.not.be.empty;
        expect(item.code).to.be.string();

        expect(item).to.have.property("name");
				expect(item.name).to.not.be.empty;
        expect(item.name).to.be.string();
      })
		});
	});
});

describe('Commmunity Payments', () => {
  let apiResponse = null;

	before(done => {
		// exec any process before
		APIAction.getDepositBankList()
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

	describe('Commmunity Deposit Banks/Get', function() {
		it('Commmunity Deposit Banks', () => {
      expect(apiResponse).to.be.array();

      apiResponse.map(item => {
        expect(item).to.be.object();
        expect(Object.values(item)).to.have.lengthOf(2);
  
        expect(item).to.have.property("code");
				expect(item.code).to.not.be.empty;
        expect(item.code).to.be.string();

        expect(item).to.have.property("name");
				expect(item.name).to.not.be.empty;
        expect(item.name).to.be.string();
      })
		});
	});
});

describe('Commmunity Payments', () => {
  let apiResponse = null;

	before(done => {
		// exec any process before
		APIAction.getPayments()
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

	describe('Commmunity Payments/Get', function() {
		it('Commmunity Payments', () => {
      expect(apiResponse).to.be.array();

      apiResponse.map(item => {
        expect(item).to.be.object();
        expect(Object.values(item)).to.have.lengthOf(9);

        expect(item).to.have.property("id");
        expect(item.id).to.be.number();

        expect(item).to.have.property("app_page");
				expect(item.app_page).to.not.be.empty;
        expect(item.app_page).to.be.string();

        expect(item).to.have.property("type");
				expect(item.type).to.not.be.empty;
        expect(item.type).to.be.string();

        expect(item).to.have.property("name");
				expect(item.name).to.not.be.empty;
        expect(item.name).to.be.string();

        expect(item).to.have.property("min");
				expect(item.min).to.not.be.empty;
        expect(item.min).to.be.string();

        expect(item).to.have.property("max");
				expect(item.max).to.not.be.empty;
        expect(item.max).to.be.string();

        expect(item).to.have.property("step");
        expect(item.step).to.be.number();

        expect(item).to.have.property("status");
				expect(item.status).to.not.be.empty;
        expect(item.status).to.be.string();
        expect(['active', 'close', 'maintain', 'coming_soon']).to.include(item.status);

        expect(item).to.have.property("image_url");
      })
		});
	});
});