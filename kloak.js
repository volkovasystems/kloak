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

const ate = require( "ate" );
const cobralize = require( "cobralize" );
const falzy = require( "falzy" );
const harden = require( "harden" );
const kein = require( "kein" );
const protype = require( "protype" );
const transpher = require( "transpher" );
const truly = require( "truly" );

const kloak = function kloak( target, delegate, stamp, name ){
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

	if( !protype( target, FUNCTION ) ){
		throw new Error( "invalid target function" );
	}

	if( !protype( delegate, FUNCTION ) ){
		throw new Error( "invalid delegate function" );
	}

	if( !protype( stamp, STRING ) || falzy( stamp ) ){
		throw new Error( "invalid stamp" );
	}

	if( truly( name ) && !protype( name, STRING ) ){
		throw new Error( "invalid name" );
	}

	if( kein( delegate, "method" ) ){
		throw new Error( "cannot cloak target delegate" );
	}

	transpher( target, delegate );

	ate( "name", target.name || name, delegate );

	harden( "method", target, delegate );

	harden( cobralize( stamp ), stamp, delegate );

	return delegate;
};

module.exports = kloak;
