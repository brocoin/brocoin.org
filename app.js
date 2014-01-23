var express = require('express')
  , engine = require('ejs-locals')
  , app = express()
  , port = 3001;

app.engine('ejs', engine);

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs'); // so you can render('index')

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index', { what: 'best', who: 'me' });
});

app.listen(port);
console.log('Listening on port '+port+'..');