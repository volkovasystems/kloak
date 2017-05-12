"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "kloak",
              			"path": "kloak/kloak.js",
              			"file": "kloak.js",
              			"module": "kloak",
              			"author": "Richeve S. Bebedor",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
              			],
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/kloak.git",
              			"test": "kloak-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Pretend delegated function.
              
              		This will not cloak delegate with method linked to it.
              		A method can be cloaked once.
              
              		Note that, this will disregard conflicted properties.
              	@end-module-documentation
              
              	@include:
              		{
              			"budge": "budge",
              			"burne": "burne",
              			"cagd": "cagd",
              			"depher": "depher",
              			"falzy": "falzy",
              			"fname": "fname",
              			"impel": "impel",
              			"mrkd": "mrkd",
              			"protype": "protype",
              			"transpher": "transpher",
              			"transym": "transym",
              			"truopt": "truopt",
              			"wichevr": "wichevr"
              		}
              	@end-include
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var budge = require("budge");
var burne = require("burne");
var cagd = require("cagd");
var depher = require("depher");
var falzy = require("falzy");
var fname = require("fname");
var impel = require("impel");
var mrkd = require("mrkd");
var protype = require("protype");
var transpher = require("transpher");
var transym = require("transym");
var truopt = require("truopt");
var wichevr = require("wichevr");

var CLOAKED = (0, _symbol2.default)("cloaked");
var DEFAULT_METHOD_NAME = "procedure";

var kloak = function kloak(method, delegate, stamp, name, option) {
	/*;
                                                                   	@meta-configuration:
                                                                   		{
                                                                   			"method:required": "function",
                                                                   			"delegate:required": "function",
                                                                   			"stamp:required": "string",
                                                                   			"name": "string",
                                                                   			"option": "object"
                                                                   		}
                                                                   	@end-meta-configuration
                                                                   */

	if (falzy(method) || !protype(method, FUNCTION)) {
		throw new Error("invalid method function");
	}

	if (falzy(delegate) || !protype(delegate, FUNCTION)) {
		throw new Error("invalid delegate function");
	}

	if (falzy(stamp) || !protype(stamp, STRING + SYMBOL)) {
		throw new Error("invalid stamp");
	}

	var parameter = budge(arguments, 3);
	name = depher(parameter, STRING, wichevr(fname(method), DEFAULT_METHOD_NAME));

	option = truopt(depher(parameter, OBJECT, { "property": true, "symbol": true }));

	/*;
                                                                                   	@note:
                                                                                   		Check if delegate is cloaked.
                                                                                   	@end-note
                                                                                   */
	if (mrkd(CLOAKED, delegate, true)) {
		return delegate;
	}

	if (option.property) {
		transpher(method, delegate, true);
	}

	if (option.symbol) {
		transym(method, delegate);
	}

	cagd("name", name, delegate);

	impel("method", method, delegate);

	burne(stamp, delegate);

	burne(CLOAKED, delegate);

	return delegate;
};

module.exports = kloak;

//# sourceMappingURL=kloak.support.js.map