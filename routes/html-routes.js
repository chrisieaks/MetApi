const path = require('path');

module.exports = function(app) {
    app.get('/', function(req, res){
        //Build DB object here to render results
        res.render('index');
    });

    app.get('/login', function(req, res){
        if(req.user) {
            res.redirect('/')
        }
        res.render('signin');
    }); 
    
    app.get('/signup', function(req, res){
        res.render('signup');
    });
};