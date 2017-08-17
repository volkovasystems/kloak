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

const assert = require( "should" );

//: @server:
const kloak = require( "./kloak.js" );
//: @end-server

//: @client:
const kloak = require( "./kloak.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "kloak", ( ) => {

	describe( "`kloak( function hello( ){ }, function hey( ){ }, 'yeah' ).name`", ( ) => {
		it( "should be equal to 'hello'", ( ) => {

			let hey = function hey( ){ };
			assert.equal( kloak( function hello( ){ }, hey, "yeah" ).name, "hello" );

		} );
	} );

	describe( "`kloak( function f( ){ return 'hello' }, function h( ){ return 'world' }, 'sample' )`", ( ) => {
		it( "should not cause the function named 'f' and function named 'h' to be equal", ( ) => {

			let f = function f( ){ return "hello" };
			let h = kloak( f, function h( ){ return "world" }, "sample" );
			assert.equal( f( ) == h( ), false );

		} );
	} );

} );

//: @end-server


//: @client:

describe( "kloak", ( ) => {

	describe( "`kloak( function hello( ){ }, function hey( ){ }, 'yeah' ).name`", ( ) => {
		it( "should be equal to 'hello'", ( ) => {

			let hey = function hey( ){ };
			assert.equal( kloak( function hello( ){ }, hey, "yeah" ).name, "hello" );

		} );
	} );

	describe( "`kloak( function f( ){ return 'hello' }, function h( ){ return 'world' }, 'sample' )`", ( ) => {
		it( "should not cause the function named 'f' and function named 'h' to be equal", ( ) => {

			let f = function f( ){ return "hello" };
			let h = kloak( f, function h( ){ return "world" }, "sample" );
			assert.equal( f( ) == h( ), false );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "kloak", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`kloak( function hello( ){ }, function hey( ){ }, 'yeah' ).name`", ( ) => {
		it( "should be equal to 'hello'", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){

					let hey = function hey( ){ };
					return kloak( function hello( ){ }, hey, "yeah" ).name;

				}

			).value;

			assert.equal( result, "hello" );

		} );
	} );

	describe( "`kloak( function f( ){ return 'hello' }, function h( ){ return 'world' }, 'sample' )`", ( ) => {
		it( "should not cause the function named 'f' and function named 'h' to be equal", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){

					let f = function f( ){ return "hello" };
					let h = kloak( f, function h( ){ return "world" }, "sample" );

					return f( ) == h( );

				}

			).value;

			assert.equal( result, false );

		} );
	} );

} );

//: @end-bridge
