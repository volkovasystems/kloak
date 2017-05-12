
const assert = require( "assert" );
const kloak = require( "./kloak.js" );

let hey = function hey( ){ };
assert.equal( kloak( function hello( ){ }, hey, "yeah" ).name, "hello", "should have name 'hello'" );

console.log( "ok" );
