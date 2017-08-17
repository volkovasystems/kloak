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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtsb2FrLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiYnVkZ2UiLCJyZXF1aXJlIiwiYnVybmUiLCJjYWdkIiwiZGVwaGVyIiwiZmFsenkiLCJmbmFtZSIsImltcGVsIiwibXJrZCIsInByb3R5cGUiLCJ0cmFuc3BoZXIiLCJ0cmFuc3ltIiwidHJ1b3B0Iiwid2ljaGV2ciIsIkNMT0FLRUQiLCJERUZBVUxUX01FVEhPRF9OQU1FIiwia2xvYWsiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsInN0YW1wIiwibmFtZSIsIm9wdGlvbiIsIkZVTkNUSU9OIiwiRXJyb3IiLCJTVFJJTkciLCJTWU1CT0wiLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiLCJPQkpFQ1QiLCJwcm9wZXJ0eSIsInN5bWJvbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RUEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUcsU0FBU0gsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNSSxRQUFRSixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1LLFFBQVFMLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTU0sUUFBUU4sUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNTyxPQUFPUCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1RLFVBQVVSLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1TLFlBQVlULFFBQVMsV0FBVCxDQUFsQjtBQUNBLElBQU1VLFVBQVVWLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1XLFNBQVNYLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTVksVUFBVVosUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1hLFVBQVUsc0JBQVEsU0FBUixDQUFoQjtBQUNBLElBQU1DLHNCQUFzQixXQUE1Qjs7QUFFQSxJQUFNQyxRQUFRLFNBQVNBLEtBQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCQyxRQUF4QixFQUFrQ0MsS0FBbEMsRUFBeUNDLElBQXpDLEVBQStDQyxNQUEvQyxFQUF1RDtBQUNwRTs7Ozs7Ozs7Ozs7O0FBWUEsS0FBSWhCLE1BQU9ZLE1BQVAsS0FBbUIsQ0FBQ1IsUUFBU1EsTUFBVCxFQUFpQkssUUFBakIsQ0FBeEIsRUFBcUQ7QUFDcEQsUUFBTSxJQUFJQyxLQUFKLENBQVcseUJBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlsQixNQUFPYSxRQUFQLEtBQXFCLENBQUNULFFBQVNTLFFBQVQsRUFBbUJJLFFBQW5CLENBQTFCLEVBQXlEO0FBQ3hELFFBQU0sSUFBSUMsS0FBSixDQUFXLDJCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJbEIsTUFBT2MsS0FBUCxLQUFrQixDQUFDVixRQUFTVSxLQUFULEVBQWdCSyxTQUFTQyxNQUF6QixDQUF2QixFQUEwRDtBQUN6RCxRQUFNLElBQUlGLEtBQUosQ0FBVyxlQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJRyxZQUFZMUIsTUFBTzJCLFNBQVAsRUFBa0IsQ0FBbEIsQ0FBaEI7QUFDQVAsUUFBT2hCLE9BQVFzQixTQUFSLEVBQW1CRixNQUFuQixFQUEyQlgsUUFBU1AsTUFBT1csTUFBUCxDQUFULEVBQTBCRixtQkFBMUIsQ0FBM0IsQ0FBUDs7QUFFQU0sVUFBU1QsT0FBUVIsT0FBUXNCLFNBQVIsRUFBbUJFLE1BQW5CLEVBQTJCLEVBQUUsWUFBWSxJQUFkLEVBQW9CLFVBQVUsSUFBOUIsRUFBM0IsQ0FBUixDQUFUOztBQUVBOzs7OztBQUtBLEtBQUlwQixLQUFNTSxPQUFOLEVBQWVJLFFBQWYsRUFBeUIsSUFBekIsQ0FBSixFQUFxQztBQUNwQyxTQUFPQSxRQUFQO0FBQ0E7O0FBRUQsS0FBSUcsT0FBT1EsUUFBWCxFQUFxQjtBQUNwQm5CLFlBQVdPLE1BQVgsRUFBbUJDLFFBQW5CLEVBQTZCLElBQTdCO0FBQ0E7O0FBRUQsS0FBSUcsT0FBT1MsTUFBWCxFQUFtQjtBQUNsQm5CLFVBQVNNLE1BQVQsRUFBaUJDLFFBQWpCO0FBQ0E7O0FBRURmLE1BQU0sTUFBTixFQUFjaUIsSUFBZCxFQUFvQkYsUUFBcEI7O0FBRUFYLE9BQU8sUUFBUCxFQUFpQlUsTUFBakIsRUFBeUJDLFFBQXpCOztBQUVBaEIsT0FBT2lCLEtBQVAsRUFBY0QsUUFBZDs7QUFFQWhCLE9BQU9ZLE9BQVAsRUFBZ0JJLFFBQWhCOztBQUVBLFFBQU9BLFFBQVA7QUFDQSxDQXhERDs7QUEwREFhLE9BQU9DLE9BQVAsR0FBaUJoQixLQUFqQiIsImZpbGUiOiJrbG9hay5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJrbG9ha1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwia2xvYWsva2xvYWsuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImtsb2FrLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImtsb2FrXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMva2xvYWsuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJrbG9hay10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdFByZXRlbmQgZGVsZWdhdGVkIGZ1bmN0aW9uLlxuXG5cdFx0VGhpcyB3aWxsIG5vdCBjbG9hayBkZWxlZ2F0ZSB3aXRoIG1ldGhvZCBsaW5rZWQgdG8gaXQuXG5cdFx0QSBtZXRob2QgY2FuIGJlIGNsb2FrZWQgb25jZS5cblxuXHRcdE5vdGUgdGhhdCwgdGhpcyB3aWxsIGRpc3JlZ2FyZCBjb25mbGljdGVkIHByb3BlcnRpZXMuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImJ1ZGdlXCI6IFwiYnVkZ2VcIixcblx0XHRcdFwiYnVybmVcIjogXCJidXJuZVwiLFxuXHRcdFx0XCJjYWdkXCI6IFwiY2FnZFwiLFxuXHRcdFx0XCJkZXBoZXJcIjogXCJkZXBoZXJcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJmbmFtZVwiOiBcImZuYW1lXCIsXG5cdFx0XHRcImltcGVsXCI6IFwiaW1wZWxcIixcblx0XHRcdFwibXJrZFwiOiBcIm1ya2RcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwidHJhbnNwaGVyXCI6IFwidHJhbnNwaGVyXCIsXG5cdFx0XHRcInRyYW5zeW1cIjogXCJ0cmFuc3ltXCIsXG5cdFx0XHRcInRydW9wdFwiOiBcInRydW9wdFwiLFxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGJ1ZGdlID0gcmVxdWlyZSggXCJidWRnZVwiICk7XG5jb25zdCBidXJuZSA9IHJlcXVpcmUoIFwiYnVybmVcIiApO1xuY29uc3QgY2FnZCA9IHJlcXVpcmUoIFwiY2FnZFwiICk7XG5jb25zdCBkZXBoZXIgPSByZXF1aXJlKCBcImRlcGhlclwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgZm5hbWUgPSByZXF1aXJlKCBcImZuYW1lXCIgKTtcbmNvbnN0IGltcGVsID0gcmVxdWlyZSggXCJpbXBlbFwiICk7XG5jb25zdCBtcmtkID0gcmVxdWlyZSggXCJtcmtkXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgdHJhbnNwaGVyID0gcmVxdWlyZSggXCJ0cmFuc3BoZXJcIiApO1xuY29uc3QgdHJhbnN5bSA9IHJlcXVpcmUoIFwidHJhbnN5bVwiICk7XG5jb25zdCB0cnVvcHQgPSByZXF1aXJlKCBcInRydW9wdFwiICk7XG5jb25zdCB3aWNoZXZyID0gcmVxdWlyZSggXCJ3aWNoZXZyXCIgKTtcblxuY29uc3QgQ0xPQUtFRCA9IFN5bWJvbCggXCJjbG9ha2VkXCIgKTtcbmNvbnN0IERFRkFVTFRfTUVUSE9EX05BTUUgPSBcInByb2NlZHVyZVwiO1xuXG5jb25zdCBrbG9hayA9IGZ1bmN0aW9uIGtsb2FrKCBtZXRob2QsIGRlbGVnYXRlLCBzdGFtcCwgbmFtZSwgb3B0aW9uICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwibWV0aG9kOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XCJkZWxlZ2F0ZTpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFwic3RhbXA6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XCJuYW1lXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFwib3B0aW9uXCI6IFwib2JqZWN0XCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggbWV0aG9kICkgfHwgIXByb3R5cGUoIG1ldGhvZCwgRlVOQ1RJT04gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG1ldGhvZCBmdW5jdGlvblwiICk7XG5cdH1cblxuXHRpZiggZmFsenkoIGRlbGVnYXRlICkgfHwgIXByb3R5cGUoIGRlbGVnYXRlLCBGVU5DVElPTiApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZGVsZWdhdGUgZnVuY3Rpb25cIiApO1xuXHR9XG5cblx0aWYoIGZhbHp5KCBzdGFtcCApIHx8ICFwcm90eXBlKCBzdGFtcCwgU1RSSU5HICsgU1lNQk9MICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBzdGFtcFwiICk7XG5cdH1cblxuXHRsZXQgcGFyYW1ldGVyID0gYnVkZ2UoIGFyZ3VtZW50cywgMyApO1xuXHRuYW1lID0gZGVwaGVyKCBwYXJhbWV0ZXIsIFNUUklORywgd2ljaGV2ciggZm5hbWUoIG1ldGhvZCApLCBERUZBVUxUX01FVEhPRF9OQU1FICkgKTtcblxuXHRvcHRpb24gPSB0cnVvcHQoIGRlcGhlciggcGFyYW1ldGVyLCBPQkpFQ1QsIHsgXCJwcm9wZXJ0eVwiOiB0cnVlLCBcInN5bWJvbFwiOiB0cnVlIH0gKSApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0Q2hlY2sgaWYgZGVsZWdhdGUgaXMgY2xvYWtlZC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0aWYoIG1ya2QoIENMT0FLRUQsIGRlbGVnYXRlLCB0cnVlICkgKXtcblx0XHRyZXR1cm4gZGVsZWdhdGU7XG5cdH1cblxuXHRpZiggb3B0aW9uLnByb3BlcnR5ICl7XG5cdFx0dHJhbnNwaGVyKCBtZXRob2QsIGRlbGVnYXRlLCB0cnVlICk7XG5cdH1cblxuXHRpZiggb3B0aW9uLnN5bWJvbCApe1xuXHRcdHRyYW5zeW0oIG1ldGhvZCwgZGVsZWdhdGUgKTtcblx0fVxuXG5cdGNhZ2QoIFwibmFtZVwiLCBuYW1lLCBkZWxlZ2F0ZSApO1xuXG5cdGltcGVsKCBcIm1ldGhvZFwiLCBtZXRob2QsIGRlbGVnYXRlICk7XG5cblx0YnVybmUoIHN0YW1wLCBkZWxlZ2F0ZSApO1xuXG5cdGJ1cm5lKCBDTE9BS0VELCBkZWxlZ2F0ZSApO1xuXG5cdHJldHVybiBkZWxlZ2F0ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2xvYWs7XG4iXX0=
//# sourceMappingURL=kloak.support.js.map
