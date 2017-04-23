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

		Note that, this will disregard conflicted properties.
	@end-module-documentation

	@include:
		{
			"ate": "ate",
			"eqe": "eqe",
			"falzy": "falzy",
			"harden": "harden",
			"impel": "impel",
			"protype": "protype",
			"transpher": "transpher",
			"truly": "truly",
			"wichevr": "wichevr"
		}
	@end-include
*/

const ate = require( "ate" );
const eqe = require( "eqe" );
const falzy = require( "falzy" );
const harden = require( "harden" );
const impel = require( "impel" );
const protype = require( "protype" );
const transpher = require( "transpher" );
const truly = require( "truly" );
const wichevr = require( "wichevr" );

const DEFAULT_METHOD_NAME = "procedure";
const CLOAKED = Symbol( "cloaked" );

const kloak = function kloak( method, delegate, stamp, name ){
	/*;
		@meta-configuration:
			{
				"method:required": "function",
				"delegate:required": "function",
				"stamp:required": "string",
				"name": "string"
			}
		@end-meta-configuration
	*/

	if( falzy( method ) || !protype( method, FUNCTION ) ){
		throw new Error( "invalid method function" );
	}

	if( falzy( delegate ) || !protype( delegate, FUNCTION ) ){
		throw new Error( "invalid delegate function" );
	}

	if( falzy( stamp ) || !protype( stamp, STRING + SYMBOL ) ){
		throw new Error( "invalid stamp" );
	}

	if( truly( name ) && !protype( name, STRING ) ){
		throw new Error( "invalid name string" );
	}

	/*;
		@note:
			All stamps must be global symbols if passed as string.
		@end-note
	*/
	if( !protype( stamp, SYMBOL ) ){
		stamp = Symbol.for( stamp );
	}

	/*;
		@note:
			Check if delegate is already a cloak and currently cloaking a method.
		@end-note
	*/
	if( delegate[ CLOAKED ] === CLOAKED &&
		delegate[ stamp ] === stamp &&
		eqe( method, delegate.method ) )
	{
		return delegate;
	}

	transpher( method, delegate, true );

	ate( "name", wichevr( name, method.name, DEFAULT_METHOD_NAME ), delegate );

	impel( "method", method, delegate );

	harden( stamp, stamp, delegate );
	harden( CLOAKED, CLOAKED, delegate );

	return delegate;
};

module.exports = kloak;
