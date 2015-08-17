var http = require('http'); /* vgl. "import java.net.*;" */
var util = require('./util'); /* vgl. "import java.util.*;" */

http.createServer(function (req, res) {
    var answer =  util.helloWorld();
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(answer);
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

