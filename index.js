/*
console.log(`\n\t${__dirname}`);
console.log(`\t${__filename}\n`);
*/

const assert = require('assert');
const Stream = require('stream');
const http = require('http');
const fs = require('fs');
const oppressor = require('oppressor');

const server = http.createServer( (request, response) => {

// Read file stream for web-server
    /*fs.readFile(`${__dirname}/package.json`, {}, (err, data) => {
        assert.equal(err,null,'File reading error');
        response.setHeader('Content-Type', 'text/html');
        response.setHeader('Custom-Header', 'something');
        response.end(`
            <pre>${data.toString()}</pre>
        `);
    } );*/

// Readfile stream for web-server with/without compressing. Stream's events
    /*let stream = fs.createReadStream(`${__dirname}/package.json`);
    // stream.pipe(response);
    // stream.pipe(oppressor(request)).pipe(response); // compress

    stream.on('data', (chunk) => {
        console.log(chunk.toString())
    });
    stream.on('readable', () => {
        console.log('readable')
    });

    stream.on('close', () => {
        console.log('close')
    });

    stream.on('end', () => {
        console.log('end')
    });

    stream.on('error', () => {
        console.log('error')
    });*/

} );
// server.listen(3000);

// Work with streams. Types of them
let readableStream$ = new Stream.Readable();

// pre buffer
// readableStream$.push('test\n');
// readableStream$.push(null); // finish of stream

// handler on read event (handler wait before something begin to read the stream)
let charCode = 'a'.charCodeAt(0);
readableStream$._read = function () {
    readableStream$.push(String.fromCharCode(charCode++));
    if( charCode > 'z'.charCodeAt(0) ) { readableStream$.push('\n'); readableStream$.push(null) }
};

process.on('exit', function () {
    console.error(`Was sent in stream ${charCode-'a'.charCodeAt(0)} letters`);
});
process.stdout.on('error', process.exit);

setTimeout( function () {
    readableStream$.pipe(process.stdout);
} , 1000);