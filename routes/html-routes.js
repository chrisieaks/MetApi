
const db = require('../models');

module.exports = function(app) {
    app.get('/', function(req, res){
        //Build DB object here to render results
        db.Post.findAll({}).then(function(data) {
          let  hbsObject = {
            posts: data
          };
          console.log(hbsObject);
          res.render('index', hbsObject);
        }); 
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