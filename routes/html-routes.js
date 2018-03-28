const path = require('path');

module.exports = function(app) {
    app.get('/', function(req, res){
        //Build DB object here to render results
        res.render('index');
    });

    app.get('/login', function(req, res){
        console.log('my name jefff');
        console.log('user: ', req.user);
        if(req.user) {
            res.redirect('/')
        }
        else{
            console.log('render login!!!')
            res.render('login');
        }
    }); 
    
    app.get('/signup', function(req, res){
        res.render('signup');
        console.log('signup req');
    });
};