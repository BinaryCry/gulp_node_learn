const minimatch = require('minimatch');

console.log( minimatch('log.txt', "*.*") );


let fileList = ['a.js', 'b.css', 'c.jsx', 'd.js'];
let f = minimatch.filter("*.js", { matchBase: true });

console.log( fileList.map(f) );