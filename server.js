var express = require('express');
var app = express();
app.get('/', function(req, res) {

res.render('index.ejs');
});
app.get('/param/:param', function(req, res) {
res.render('page'+req.params.param +'.ejs', {monParam: req.params.param});
});
app.listen(8080);
