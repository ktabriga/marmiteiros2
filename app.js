
/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('errorhandler'),
  morgan = require('morgan'),
  http = require('http'),
  path = require('path'),
  mongoose = require('mongoose'),
  config = require('./config'),
  expressJwt = require('express-jwt'),
  template = require('./template/templateRouter'),
  api = require('./api');

mongoose.connect(config.urlMongo);
var db = mongoose.connection;
db.once('open', function () {
    console.log('open connection');
});

db.on('error', function (err) {
    console.log('connection error', err);
});

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  app.use(errorHandler());
}

// production only
if (env === 'production') {
  // TODO
}

/**
 * Security api
 */
//app.use('/api', expressJwt({
//    secret: config.securitKey
//}));

app.use('/api',api());
app.use(template());


/**
 * Start Server
 */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
