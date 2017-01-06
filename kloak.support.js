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
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/kloak.git",
			"test": "kloak-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Pretend delegated function.

		This will not cloak delegate with method linked to it.
	@end-module-documentation

	@include:
		{
			"ate": "ate",
			"cobralize": "cobralize",
			"falzy": "falzy",
			"harden": "harden",
			"kein": "kein",
			"protype": "protype",
			"transpher": "transpher",
			"truly": "truly"
		}
	@end-include
*/

var ate = require("ate");
var cobralize = require("cobralize");
var falzy = require("falzy");
var harden = require("harden");
var kein = require("kein");
var protype = require("protype");
var transpher = require("transpher");
var truly = require("truly");

var kloak = function kloak(target, delegate, stamp, name) {
	/*;
 	@meta-configuration:
 		{
 			"target:required": "function",
 			"delegate:required": "function",
 			"stamp:required": "string",
 			"name": "string"
 		}
 	@end-meta-configuration
 */

	if (!protype(target, FUNCTION)) {
		throw new Error("invalid target function");
	}

	if (!protype(delegate, FUNCTION)) {
		throw new Error("invalid delegate function");
	}

	if (!protype(stamp, STRING) || falzy(stamp)) {
		throw new Error("invalid stamp");
	}

	if (truly(name) && !protype(name, STRING)) {
		throw new Error("invalid name");
	}

	if (kein(delegate, "method")) {
		throw new Error("cannot cloak target delegate");
	}

	transpher(target, delegate);

	ate("name", target.name || name, delegate);

	harden("method", target, delegate);

	harden(cobralize(stamp), stamp, delegate);

	return delegate;
};

module.exports = kloak;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtsb2FrLmpzIl0sIm5hbWVzIjpbImF0ZSIsInJlcXVpcmUiLCJjb2JyYWxpemUiLCJmYWx6eSIsImhhcmRlbiIsImtlaW4iLCJwcm90eXBlIiwidHJhbnNwaGVyIiwidHJ1bHkiLCJrbG9hayIsInRhcmdldCIsImRlbGVnYXRlIiwic3RhbXAiLCJuYW1lIiwiRlVOQ1RJT04iLCJFcnJvciIsIlNUUklORyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkRBLElBQU1BLE1BQU1DLFFBQVMsS0FBVCxDQUFaO0FBQ0EsSUFBTUMsWUFBWUQsUUFBUyxXQUFULENBQWxCO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1JLE9BQU9KLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUssVUFBVUwsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTU0sWUFBWU4sUUFBUyxXQUFULENBQWxCO0FBQ0EsSUFBTU8sUUFBUVAsUUFBUyxPQUFULENBQWQ7O0FBRUEsSUFBTVEsUUFBUSxTQUFTQSxLQUFULENBQWdCQyxNQUFoQixFQUF3QkMsUUFBeEIsRUFBa0NDLEtBQWxDLEVBQXlDQyxJQUF6QyxFQUErQztBQUM1RDs7Ozs7Ozs7Ozs7QUFXQSxLQUFJLENBQUNQLFFBQVNJLE1BQVQsRUFBaUJJLFFBQWpCLENBQUwsRUFBa0M7QUFDakMsUUFBTSxJQUFJQyxLQUFKLENBQVcseUJBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUksQ0FBQ1QsUUFBU0ssUUFBVCxFQUFtQkcsUUFBbkIsQ0FBTCxFQUFvQztBQUNuQyxRQUFNLElBQUlDLEtBQUosQ0FBVywyQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSSxDQUFDVCxRQUFTTSxLQUFULEVBQWdCSSxNQUFoQixDQUFELElBQTZCYixNQUFPUyxLQUFQLENBQWpDLEVBQWlEO0FBQ2hELFFBQU0sSUFBSUcsS0FBSixDQUFXLGVBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlQLE1BQU9LLElBQVAsS0FBaUIsQ0FBQ1AsUUFBU08sSUFBVCxFQUFlRyxNQUFmLENBQXRCLEVBQStDO0FBQzlDLFFBQU0sSUFBSUQsS0FBSixDQUFXLGNBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlWLEtBQU1NLFFBQU4sRUFBZ0IsUUFBaEIsQ0FBSixFQUFnQztBQUMvQixRQUFNLElBQUlJLEtBQUosQ0FBVyw4QkFBWCxDQUFOO0FBQ0E7O0FBRURSLFdBQVdHLE1BQVgsRUFBbUJDLFFBQW5COztBQUVBWCxLQUFLLE1BQUwsRUFBYVUsT0FBT0csSUFBUCxJQUFlQSxJQUE1QixFQUFrQ0YsUUFBbEM7O0FBRUFQLFFBQVEsUUFBUixFQUFrQk0sTUFBbEIsRUFBMEJDLFFBQTFCOztBQUVBUCxRQUFRRixVQUFXVSxLQUFYLENBQVIsRUFBNEJBLEtBQTVCLEVBQW1DRCxRQUFuQzs7QUFFQSxRQUFPQSxRQUFQO0FBQ0EsQ0F6Q0Q7O0FBMkNBTSxPQUFPQyxPQUFQLEdBQWlCVCxLQUFqQiIsImZpbGUiOiJrbG9hay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwia2xvYWtcIixcblx0XHRcdFwicGF0aFwiOiBcImtsb2FrL2tsb2FrLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJrbG9hay5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJrbG9ha1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMva2xvYWsuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJrbG9hay10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdFByZXRlbmQgZGVsZWdhdGVkIGZ1bmN0aW9uLlxuXG5cdFx0VGhpcyB3aWxsIG5vdCBjbG9hayBkZWxlZ2F0ZSB3aXRoIG1ldGhvZCBsaW5rZWQgdG8gaXQuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImF0ZVwiOiBcImF0ZVwiLFxuXHRcdFx0XCJjb2JyYWxpemVcIjogXCJjb2JyYWxpemVcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwidHJhbnNwaGVyXCI6IFwidHJhbnNwaGVyXCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhdGUgPSByZXF1aXJlKCBcImF0ZVwiICk7XG5jb25zdCBjb2JyYWxpemUgPSByZXF1aXJlKCBcImNvYnJhbGl6ZVwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHRyYW5zcGhlciA9IHJlcXVpcmUoIFwidHJhbnNwaGVyXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5cbmNvbnN0IGtsb2FrID0gZnVuY3Rpb24ga2xvYWsoIHRhcmdldCwgZGVsZWdhdGUsIHN0YW1wLCBuYW1lICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwidGFyZ2V0OnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XCJkZWxlZ2F0ZTpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFwic3RhbXA6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XCJuYW1lXCI6IFwic3RyaW5nXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhcHJvdHlwZSggdGFyZ2V0LCBGVU5DVElPTiApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgdGFyZ2V0IGZ1bmN0aW9uXCIgKTtcblx0fVxuXG5cdGlmKCAhcHJvdHlwZSggZGVsZWdhdGUsIEZVTkNUSU9OICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBkZWxlZ2F0ZSBmdW5jdGlvblwiICk7XG5cdH1cblxuXHRpZiggIXByb3R5cGUoIHN0YW1wLCBTVFJJTkcgKSB8fCBmYWx6eSggc3RhbXAgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHN0YW1wXCIgKTtcblx0fVxuXG5cdGlmKCB0cnVseSggbmFtZSApICYmICFwcm90eXBlKCBuYW1lLCBTVFJJTkcgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG5hbWVcIiApO1xuXHR9XG5cblx0aWYoIGtlaW4oIGRlbGVnYXRlLCBcIm1ldGhvZFwiICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGNsb2FrIHRhcmdldCBkZWxlZ2F0ZVwiICk7XG5cdH1cblxuXHR0cmFuc3BoZXIoIHRhcmdldCwgZGVsZWdhdGUgKTtcblxuXHRhdGUoIFwibmFtZVwiLCB0YXJnZXQubmFtZSB8fCBuYW1lLCBkZWxlZ2F0ZSApO1xuXG5cdGhhcmRlbiggXCJtZXRob2RcIiwgdGFyZ2V0LCBkZWxlZ2F0ZSApO1xuXG5cdGhhcmRlbiggY29icmFsaXplKCBzdGFtcCApLCBzdGFtcCwgZGVsZWdhdGUgKTtcblxuXHRyZXR1cm4gZGVsZWdhdGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtsb2FrO1xuIl19
