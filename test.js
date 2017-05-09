var assert = require('assert');
var echo = require('./echo');

describe('channel', function() {
	before(function() {
		// exec any process before
	});
	after(function() {
		// exec any process after
	});
	describe('getListData', function() {
		it('should receive true', function() {
			assert.equal(true, echo.print([1, 2], [1, 2]));
			// echo.print([1, 2], [1, 2]).should.equal(true);
		});
	});
});