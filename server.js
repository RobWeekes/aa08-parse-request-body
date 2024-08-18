const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
const http = require('http');
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// start server code
server = http.createServer((req, res) => {

// console.log(res);

let reqBody = '';
req.on('data', (data) => {
    reqBody += data;
});

// console.log('METHOD:', req.method);
// console.log('URL:', req.url);
console.log(req.method, req.url);

return res.end("Bye");


});
// end of server code

const port = 5000;

server.listen(port, () => console.log('Successfully started the server on port', port));




/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
