/*
 * Module dependencies.
 */
var express = require('express');
var routes = require('./routes');

var app = module.exports = express.createServer();

/*
 * Configuration
 */
app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});