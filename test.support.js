"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "kloak",
              			"path": "kloak/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/kloak.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"kloak": "kloak"
              		}
              	@end-include
              */

var assert = require("should");



//: @client:
var kloak = require("./kloak.support.js");
//: @end-client







//: @client:

describe("kloak", function () {

	describe("`kloak( function hello( ){ }, function hey( ){ }, 'yeah' ).name`", function () {
		it("should be equal to 'hello'", function () {

			var hey = function hey() {};
			assert.equal(kloak(function hello() {}, hey, "yeah").name, "hello");

		});
	});

	describe("`kloak( function f( ){ return 'hello' }, function h( ){ return 'world' }, 'sample' )`", function () {
		it("should not cause the function named 'f' and function named 'h' to be equal", function () {

			var f = function f() {return "hello";};
			var h = kloak(f, function h() {return "world";}, "sample");
			assert.equal(f() == h(), false);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwia2xvYWsiLCJkZXNjcmliZSIsIml0IiwiaGV5IiwiZXF1YWwiLCJoZWxsbyIsIm5hbWUiLCJmIiwiaCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxvQkFBVCxDQUFkO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsT0FBVixFQUFtQixZQUFPOztBQUV6QkEsVUFBVSxrRUFBVixFQUE4RSxZQUFPO0FBQ3BGQyxLQUFJLDRCQUFKLEVBQWtDLFlBQU87O0FBRXhDLE9BQUlDLE1BQU0sU0FBU0EsR0FBVCxHQUFlLENBQUcsQ0FBNUI7QUFDQUwsVUFBT00sS0FBUCxDQUFjSixNQUFPLFNBQVNLLEtBQVQsR0FBaUIsQ0FBRyxDQUEzQixFQUE2QkYsR0FBN0IsRUFBa0MsTUFBbEMsRUFBMkNHLElBQXpELEVBQStELE9BQS9EOztBQUVBLEdBTEQ7QUFNQSxFQVBEOztBQVNBTCxVQUFVLHVGQUFWLEVBQW1HLFlBQU87QUFDekdDLEtBQUksNEVBQUosRUFBa0YsWUFBTzs7QUFFeEYsT0FBSUssSUFBSSxTQUFTQSxDQUFULEdBQWEsQ0FBRSxPQUFPLE9BQVAsQ0FBZ0IsQ0FBdkM7QUFDQSxPQUFJQyxJQUFJUixNQUFPTyxDQUFQLEVBQVUsU0FBU0MsQ0FBVCxHQUFhLENBQUUsT0FBTyxPQUFQLENBQWdCLENBQXpDLEVBQTJDLFFBQTNDLENBQVI7QUFDQVYsVUFBT00sS0FBUCxDQUFjRyxPQUFRQyxHQUF0QixFQUE0QixLQUE1Qjs7QUFFQSxHQU5EO0FBT0EsRUFSRDs7QUFVQSxDQXJCRDs7QUF1QkEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJrbG9ha1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwia2xvYWsvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2tsb2FrLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJrbG9ha1wiOiBcImtsb2FrXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBrbG9hayA9IHJlcXVpcmUoIFwiLi9rbG9hay5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwia2xvYWtcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJga2xvYWsoIGZ1bmN0aW9uIGhlbGxvKCApeyB9LCBmdW5jdGlvbiBoZXkoICl7IH0sICd5ZWFoJyApLm5hbWVgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdoZWxsbydcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IGhleSA9IGZ1bmN0aW9uIGhleSggKXsgfTtcblx0XHRcdGFzc2VydC5lcXVhbCgga2xvYWsoIGZ1bmN0aW9uIGhlbGxvKCApeyB9LCBoZXksIFwieWVhaFwiICkubmFtZSwgXCJoZWxsb1wiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJga2xvYWsoIGZ1bmN0aW9uIGYoICl7IHJldHVybiAnaGVsbG8nIH0sIGZ1bmN0aW9uIGgoICl7IHJldHVybiAnd29ybGQnIH0sICdzYW1wbGUnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIG5vdCBjYXVzZSB0aGUgZnVuY3Rpb24gbmFtZWQgJ2YnIGFuZCBmdW5jdGlvbiBuYW1lZCAnaCcgdG8gYmUgZXF1YWxcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IGYgPSBmdW5jdGlvbiBmKCApeyByZXR1cm4gXCJoZWxsb1wiIH07XG5cdFx0XHRsZXQgaCA9IGtsb2FrKCBmLCBmdW5jdGlvbiBoKCApeyByZXR1cm4gXCJ3b3JsZFwiIH0sIFwic2FtcGxlXCIgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggZiggKSA9PSBoKCApLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
