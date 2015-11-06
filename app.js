<<<<<<< HEAD
require('coffee-script')

require('./servers/servidor.coffee')
=======
var http = require("http");

function onRequest(request, response) {
  console.log("Peticion Recibida.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundito");
  response.end();
}

http.createServer(onRequest).listen(process.env.PORT);

console.log("Servidor Iniciado.");
>>>>>>> fceb9db066f9c0f79ecaefc6f186a5368692ea5a
