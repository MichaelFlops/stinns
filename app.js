var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/*
var routes = require('./routes/index');
var users = require('./routes/users');
var hacks = require('./routes/hacks');
*/


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.engine('html', require('ejs').renderFile);

app.use(favicon());app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//me
app.get('/', function (req, res)
{
    res.render('index.html');
});

app.get('/robots', function (req, res)
{
    res.render('robots.txt');
});

app.get('/sitemap', function (req, res)
{
    res.sendFile('sitemap.xml');
});


// app.use(function (req, res, next) {
//     if ('/robots.txt' == req.url) {
//         res.type('text/plain')
//         res.send("User-agent: *\nDisallow:");
//     } else {
//         next();
//     }
// });

// app.use(function (req, res, next) {
//     // body...
//     if ('sitemap.xml' == req.url) {
//         res.type('xml');
//         res.send('sitemap.xml');
//     } else {
//         next();
//     }
// });


/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  //debug('Express server listening on port ' + server.address().port);
});


//module.exports = app;
