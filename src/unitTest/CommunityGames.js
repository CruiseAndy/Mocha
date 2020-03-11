import chai, { expect } from "chai";
import * as  APIAction from "../actions";
import asserttype from "chai-asserttype";

chai.use(asserttype);

/**
 * 語法：https://www.chaijs.com/api/bdd/
 */

describe('Commmunity Games', () => {
  let apiResponse = null;
  const gameNames = [
    'casino', 'sports', 'lottery',
    'esports', 'horserace', 'cockfight',
    'egame', 'poker'
  ];

	before(done => {
		// exec any process before
		APIAction.getGamesInfo()
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

	describe('Commmunity Games/Get', function() {
		it('Commmunity Games', () => {
      expect(apiResponse).to.be.object();

      Object.entries(apiResponse).map(category => {
        const [ name, games ] = category;

        expect(gameNames).to.include(name);

        games.map(item => {
          expect(item).to.have.property("name");
          expect(item.name).to.not.be.empty;
          expect(item.name).to.be.string();

          expect(item).to.have.property("game_url");
          expect(item.game_url).to.not.be.empty;
          expect(item.game_url).to.be.string();

          expect(item).to.have.property("image_url");
          expect(item.image_url).to.not.be.empty;
          expect(item.image_url).to.be.string();

          expect(item).to.have.property("app_image_url");
          expect(item.app_image_url).to.not.be.empty;
          expect(item.app_image_url).to.be.string();

          expect(item).to.have.property("game_logo_url");
          expect(item.game_logo_url).to.not.be.empty;
          expect(item.game_logo_url).to.be.string();

          expect(item).to.have.property("status");
          expect(item.status).to.not.be.empty;
          expect(item.status).to.be.string();
          expect(['active', 'maintain', 'coming_soon', 'close']).to.include(item.status);
        })
      })
		});
	});
});