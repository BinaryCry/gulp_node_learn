console.log(`\n\t${__dirname}`);
console.log(`\t${__filename}\n`);

const assert = require('assert');
const Stream = require('stream');
const http = require('http');
const fs = require('fs');

const server = http.createServer( (request, response) => {

    /*fs.readFile(`${__dirname}/package.json`, {}, (err, data) => {
        assert.equal(err,null,'File reading error');
        response.setHeader('Content-Type', 'text/html');
        response.setHeader('Custom-Header', 'something');
        response.end(`
            <pre>${data.toString()}</pre>
        `);
    } );*/


    let stream = fs.createReadStream(`${__dirname}/package.json`);
    stream.pipe(response);


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
    });

} );

server.listen(3000);