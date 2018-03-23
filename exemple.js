var http = require('http'); //instanciation d'un objet HTTP à partir du module 'http'.
http.createServer(function (req, res) { //appel à la méthode de création d'un serveur.
res.writeHead(200, {'Content-Type': 'text/plain'}); //manipulation de l'objet 'res'
//(réponse http) pour ajouter un champ dans son ent^ete
res.end('Hello World\n'); //écriture du coprs de la réponse
}).listen(1337, '127.0.0.1'); //lancement du serveur en précisant le port d'écoute
console.log('Server running at http://127.0.0.1:1337/'); //écriture dnas la console JS
