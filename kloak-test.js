
const kloak = require( "./kloak.js" );
const util = require( "util" );

let test = kloak( function hello( ){ }, function yeah( ){ }, "test", "sample" );
console.log( util.inspect( test, { "showHidden": true } ) );

console.log( test.toString( ) );

console.log( kloak( function nice( ){ }, test, "test" ) );
