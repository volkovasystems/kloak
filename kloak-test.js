
const assert = require( "assert" );
const kloak = require( "./kloak.js" );

let hey = function hey( ){ };
assert.equal( kloak( function hello( ){ }, hey, "yeah" ).name, "hello", "should be equal to 'hello'" );

let f = function f( ){ return "hello" };
let h = kloak( f, function h( ){ return "world" }, "sample" );
assert.equal( f( ) == h( ), false, "should be equal to false" );

console.log( "ok" );
