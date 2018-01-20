var express    = require('express');
var Webtask    = require('webtask-tools');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.post('/', function (req, res) {
  console.log(req.headers['x-forwarded-for']);
  console.log(req.connection.remoteAddress);
  console.log(req.ip);
  console.log(req.socket.remoteAddress);

  res.sendStatus(200);
});

module.exports = Webtask.fromExpress(app);

