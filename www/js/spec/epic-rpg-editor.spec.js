require.config({
	"baseUrl": "www/",
	"paths": {
		"jquery": "thirdparty/jquery",
		"underscore": "thirdparty/underscore"
//		"ERE": "js/epic-rpg-editor/epic-rpg-editor"
	},
	shim: {
		'underscore': {
			exports: '_'
		}
	}
});

describe("A false case", function() {
	it("canot be true", function() {
		expect(true).not.toBe(false);
	});
});

define(["jquery"],
function ($) {

describe("Um teste de teste", function() {
	it("canot be true", function() {
		expect(true).not.toBe(false);
	});
});

});

