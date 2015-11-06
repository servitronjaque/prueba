var http = require("http");

function onRequest(request, response) {
  console.log("Peticion Recibida.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundito");
  response.end();
}

http.createServer(onRequest).listen(process.env.PORT);

console.log("Servidor Iniciado.");