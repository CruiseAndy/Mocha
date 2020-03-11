import chai, { expect } from "chai";
import * as  APIAction from "../actions";
import asserttype from "chai-asserttype";

chai.use(asserttype);

/**
 * 語法：https://www.chaijs.com/api/bdd/
 */

describe('Commmunity Bonuses', () => {
  let apiResponse = null;
  const categoryList = [
    'DailyValidAmount', 'WeeklyValidAmount', 'PeriodDeposit',
    'PeriodFirstDeposit', 'LoseRescue', 'FirstDeposit',
    'RegisterationComplete', 'Deposit', 'Custom'
  ];

	before(done => {
		// exec any process before
		APIAction.getCommunityPromotionsList()
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

	describe('Commmunity Bonuses/Get', function() {
		it('Commmunity Bonuses', () => {
      expect(apiResponse).to.be.array();

      if (apiResponse.length != 0) {
        apiResponse.map(item => {
          expect(item).to.be.object();
          expect(Object.values(item)).to.have.lengthOf(8);

          expect(item).to.have.property("id");
          expect(item.id).to.be.number();

          expect(item).to.have.property("name");
          expect(item.name).to.not.be.empty;
          expect(item.name).to.be.string();

          expect(item).to.have.property("category");
          expect(item.category).to.not.be.empty;
          expect(item.category).to.be.string();
          expect(categoryList).to.include(item.category);

          expect(item).to.have.property("status");
          expect(item.status).to.not.be.empty;
          expect(item.status).to.be.string();
          expect(['off', 'auto', 'on']).to.include(item.status);

          expect(item).to.have.property("image");

          expect(item).to.have.property("genre");
          expect(item.genre).to.not.be.empty;
          expect(item.genre).to.be.string();
          expect(['deposit', 'validation', 'rebate', 'others']).to.include(item.genre);

          expect(item).to.have.property("start_at");
          expect(item.start_at).to.not.be.empty;
          expect(item.start_at).to.be.string();

          expect(item).to.have.property("end_at");
          expect(item.end_at).to.not.be.empty;
          expect(item.end_at).to.be.string();
        })
      }
		});
	});
});