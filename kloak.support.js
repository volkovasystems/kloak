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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtsb2FrLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiYnVkZ2UiLCJyZXF1aXJlIiwiYnVybmUiLCJjYWdkIiwiZGVwaGVyIiwiZmFsenkiLCJmbmFtZSIsImltcGVsIiwibXJrZCIsInByb3R5cGUiLCJ0cmFuc3BoZXIiLCJ0cmFuc3ltIiwidHJ1b3B0Iiwid2ljaGV2ciIsIkNMT0FLRUQiLCJERUZBVUxUX01FVEhPRF9OQU1FIiwia2xvYWsiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsInN0YW1wIiwibmFtZSIsIm9wdGlvbiIsIkZVTkNUSU9OIiwiRXJyb3IiLCJTVFJJTkciLCJTWU1CT0wiLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiLCJPQkpFQ1QiLCJwcm9wZXJ0eSIsInN5bWJvbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RUEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUcsU0FBU0gsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNSSxRQUFRSixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1LLFFBQVFMLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTU0sUUFBUU4sUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNTyxPQUFPUCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1RLFVBQVVSLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1TLFlBQVlULFFBQVMsV0FBVCxDQUFsQjtBQUNBLElBQU1VLFVBQVVWLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1XLFNBQVNYLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTVksVUFBVVosUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1hLFVBQVUsc0JBQVEsU0FBUixDQUFoQjtBQUNBLElBQU1DLHNCQUFzQixXQUE1Qjs7QUFFQSxJQUFNQyxRQUFRLFNBQVNBLEtBQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCQyxRQUF4QixFQUFrQ0MsS0FBbEMsRUFBeUNDLElBQXpDLEVBQStDQyxNQUEvQyxFQUF1RDtBQUNwRTs7Ozs7Ozs7Ozs7O0FBWUEsS0FBSWhCLE1BQU9ZLE1BQVAsS0FBbUIsQ0FBQ1IsUUFBU1EsTUFBVCxFQUFpQkssUUFBakIsQ0FBeEIsRUFBcUQ7QUFDcEQsUUFBTSxJQUFJQyxLQUFKLENBQVcseUJBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlsQixNQUFPYSxRQUFQLEtBQXFCLENBQUNULFFBQVNTLFFBQVQsRUFBbUJJLFFBQW5CLENBQTFCLEVBQXlEO0FBQ3hELFFBQU0sSUFBSUMsS0FBSixDQUFXLDJCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJbEIsTUFBT2MsS0FBUCxLQUFrQixDQUFDVixRQUFTVSxLQUFULEVBQWdCSyxTQUFTQyxNQUF6QixDQUF2QixFQUEwRDtBQUN6RCxRQUFNLElBQUlGLEtBQUosQ0FBVyxlQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJRyxZQUFZMUIsTUFBTzJCLFNBQVAsRUFBa0IsQ0FBbEIsQ0FBaEI7QUFDQVAsUUFBT2hCLE9BQVFzQixTQUFSLEVBQW1CRixNQUFuQixFQUEyQlgsUUFBU1AsTUFBT1csTUFBUCxDQUFULEVBQTBCRixtQkFBMUIsQ0FBM0IsQ0FBUDs7QUFFQU0sVUFBU1QsT0FBUVIsT0FBUXNCLFNBQVIsRUFBbUJFLE1BQW5CLEVBQTJCLEVBQUUsWUFBWSxJQUFkLEVBQW9CLFVBQVUsSUFBOUIsRUFBM0IsQ0FBUixDQUFUOztBQUVBOzs7OztBQUtBLEtBQUlwQixLQUFNTSxPQUFOLEVBQWVJLFFBQWYsRUFBeUIsSUFBekIsQ0FBSixFQUFxQztBQUNwQyxTQUFPQSxRQUFQO0FBQ0E7O0FBRUQsS0FBSUcsT0FBT1EsUUFBWCxFQUFxQjtBQUNwQm5CLFlBQVdPLE1BQVgsRUFBbUJDLFFBQW5CLEVBQTZCLElBQTdCO0FBQ0E7O0FBRUQsS0FBSUcsT0FBT1MsTUFBWCxFQUFtQjtBQUNsQm5CLFVBQVNNLE1BQVQsRUFBaUJDLFFBQWpCO0FBQ0E7O0FBRURmLE1BQU0sTUFBTixFQUFjaUIsSUFBZCxFQUFvQkYsUUFBcEI7O0FBRUFYLE9BQU8sUUFBUCxFQUFpQlUsTUFBakIsRUFBeUJDLFFBQXpCOztBQUVBaEIsT0FBT2lCLEtBQVAsRUFBY0QsUUFBZDs7QUFFQWhCLE9BQU9ZLE9BQVAsRUFBZ0JJLFFBQWhCOztBQUVBLFFBQU9BLFFBQVA7QUFDQSxDQXhERDs7QUEwREFhLE9BQU9DLE9BQVAsR0FBaUJoQixLQUFqQiIsImZpbGUiOiJrbG9hay5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImtsb2FrXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImtsb2FrL2tsb2FrLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcImtsb2FrLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwia2xvYWtcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9rbG9hay5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwia2xvYWstdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRQcmV0ZW5kIGRlbGVnYXRlZCBmdW5jdGlvbi5cclxuXHJcblx0XHRUaGlzIHdpbGwgbm90IGNsb2FrIGRlbGVnYXRlIHdpdGggbWV0aG9kIGxpbmtlZCB0byBpdC5cclxuXHRcdEEgbWV0aG9kIGNhbiBiZSBjbG9ha2VkIG9uY2UuXHJcblxyXG5cdFx0Tm90ZSB0aGF0LCB0aGlzIHdpbGwgZGlzcmVnYXJkIGNvbmZsaWN0ZWQgcHJvcGVydGllcy5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImJ1ZGdlXCI6IFwiYnVkZ2VcIixcclxuXHRcdFx0XCJidXJuZVwiOiBcImJ1cm5lXCIsXHJcblx0XHRcdFwiY2FnZFwiOiBcImNhZ2RcIixcclxuXHRcdFx0XCJkZXBoZXJcIjogXCJkZXBoZXJcIixcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXHJcblx0XHRcdFwiZm5hbWVcIjogXCJmbmFtZVwiLFxyXG5cdFx0XHRcImltcGVsXCI6IFwiaW1wZWxcIixcclxuXHRcdFx0XCJtcmtkXCI6IFwibXJrZFwiLFxyXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXHJcblx0XHRcdFwidHJhbnNwaGVyXCI6IFwidHJhbnNwaGVyXCIsXHJcblx0XHRcdFwidHJhbnN5bVwiOiBcInRyYW5zeW1cIixcclxuXHRcdFx0XCJ0cnVvcHRcIjogXCJ0cnVvcHRcIixcclxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBidWRnZSA9IHJlcXVpcmUoIFwiYnVkZ2VcIiApO1xyXG5jb25zdCBidXJuZSA9IHJlcXVpcmUoIFwiYnVybmVcIiApO1xyXG5jb25zdCBjYWdkID0gcmVxdWlyZSggXCJjYWdkXCIgKTtcclxuY29uc3QgZGVwaGVyID0gcmVxdWlyZSggXCJkZXBoZXJcIiApO1xyXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xyXG5jb25zdCBmbmFtZSA9IHJlcXVpcmUoIFwiZm5hbWVcIiApO1xyXG5jb25zdCBpbXBlbCA9IHJlcXVpcmUoIFwiaW1wZWxcIiApO1xyXG5jb25zdCBtcmtkID0gcmVxdWlyZSggXCJtcmtkXCIgKTtcclxuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XHJcbmNvbnN0IHRyYW5zcGhlciA9IHJlcXVpcmUoIFwidHJhbnNwaGVyXCIgKTtcclxuY29uc3QgdHJhbnN5bSA9IHJlcXVpcmUoIFwidHJhbnN5bVwiICk7XHJcbmNvbnN0IHRydW9wdCA9IHJlcXVpcmUoIFwidHJ1b3B0XCIgKTtcclxuY29uc3Qgd2ljaGV2ciA9IHJlcXVpcmUoIFwid2ljaGV2clwiICk7XHJcblxyXG5jb25zdCBDTE9BS0VEID0gU3ltYm9sKCBcImNsb2FrZWRcIiApO1xyXG5jb25zdCBERUZBVUxUX01FVEhPRF9OQU1FID0gXCJwcm9jZWR1cmVcIjtcclxuXHJcbmNvbnN0IGtsb2FrID0gZnVuY3Rpb24ga2xvYWsoIG1ldGhvZCwgZGVsZWdhdGUsIHN0YW1wLCBuYW1lLCBvcHRpb24gKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm1ldGhvZDpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XCJkZWxlZ2F0ZTpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XCJzdGFtcDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxyXG5cdFx0XHRcdFwibmFtZVwiOiBcInN0cmluZ1wiLFxyXG5cdFx0XHRcdFwib3B0aW9uXCI6IFwib2JqZWN0XCJcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggZmFsenkoIG1ldGhvZCApIHx8ICFwcm90eXBlKCBtZXRob2QsIEZVTkNUSU9OICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG1ldGhvZCBmdW5jdGlvblwiICk7XHJcblx0fVxyXG5cclxuXHRpZiggZmFsenkoIGRlbGVnYXRlICkgfHwgIXByb3R5cGUoIGRlbGVnYXRlLCBGVU5DVElPTiApICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBkZWxlZ2F0ZSBmdW5jdGlvblwiICk7XHJcblx0fVxyXG5cclxuXHRpZiggZmFsenkoIHN0YW1wICkgfHwgIXByb3R5cGUoIHN0YW1wLCBTVFJJTkcgKyBTWU1CT0wgKSApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgc3RhbXBcIiApO1xyXG5cdH1cclxuXHJcblx0bGV0IHBhcmFtZXRlciA9IGJ1ZGdlKCBhcmd1bWVudHMsIDMgKTtcclxuXHRuYW1lID0gZGVwaGVyKCBwYXJhbWV0ZXIsIFNUUklORywgd2ljaGV2ciggZm5hbWUoIG1ldGhvZCApLCBERUZBVUxUX01FVEhPRF9OQU1FICkgKTtcclxuXHJcblx0b3B0aW9uID0gdHJ1b3B0KCBkZXBoZXIoIHBhcmFtZXRlciwgT0JKRUNULCB7IFwicHJvcGVydHlcIjogdHJ1ZSwgXCJzeW1ib2xcIjogdHJ1ZSB9ICkgKTtcclxuXHJcblx0Lyo7XHJcblx0XHRAbm90ZTpcclxuXHRcdFx0Q2hlY2sgaWYgZGVsZWdhdGUgaXMgY2xvYWtlZC5cclxuXHRcdEBlbmQtbm90ZVxyXG5cdCovXHJcblx0aWYoIG1ya2QoIENMT0FLRUQsIGRlbGVnYXRlLCB0cnVlICkgKXtcclxuXHRcdHJldHVybiBkZWxlZ2F0ZTtcclxuXHR9XHJcblxyXG5cdGlmKCBvcHRpb24ucHJvcGVydHkgKXtcclxuXHRcdHRyYW5zcGhlciggbWV0aG9kLCBkZWxlZ2F0ZSwgdHJ1ZSApO1xyXG5cdH1cclxuXHJcblx0aWYoIG9wdGlvbi5zeW1ib2wgKXtcclxuXHRcdHRyYW5zeW0oIG1ldGhvZCwgZGVsZWdhdGUgKTtcclxuXHR9XHJcblxyXG5cdGNhZ2QoIFwibmFtZVwiLCBuYW1lLCBkZWxlZ2F0ZSApO1xyXG5cclxuXHRpbXBlbCggXCJtZXRob2RcIiwgbWV0aG9kLCBkZWxlZ2F0ZSApO1xyXG5cclxuXHRidXJuZSggc3RhbXAsIGRlbGVnYXRlICk7XHJcblxyXG5cdGJ1cm5lKCBDTE9BS0VELCBkZWxlZ2F0ZSApO1xyXG5cclxuXHRyZXR1cm4gZGVsZWdhdGU7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGtsb2FrO1xyXG4iXX0=
//# sourceMappingURL=kloak.support.js.map
