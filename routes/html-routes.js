
const db = require('../models');
const isAuthenticated = require("../config/middleware/isAuthenticated");

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

    app.get('/social', function(req, res){
        db.Post.findAll({
            where: {
                tags: 'social'
            }
        }).then(function(data){
            let hbsObject = {
                posts: data
            };
            console.log(hbsObject);
            res.render('index', hbsObject);
        });
    });

    app.get('/tools', function(req, res){
        db.Post.findAll({
            where: {
                tags: 'tools'
            }
        }).then(function(data){
            let hbsObject = {
                posts: data
            };
            console.log(hbsObject);
            res.render('index', hbsObject);
        });
    });

    app.get('/data', function(req, res){
        db.Post.findAll({
            where: {
                tags: 'data'
            }
        }).then(function(data){
            let hbsObject = {
                posts: data
            };
            console.log(hbsObject);
            res.render('index', hbsObject);
        });
    });



    app.get('/login', function(req, res){
        if(req.user) {
            res.redirect('/')
        }
        else{
            res.render('login');
        }
    }); 
    
    app.get('/signup', function(req, res){
        res.render('signup');
        console.log('signup req');
    });
<<<<<<< HEAD
    
    app.get('/submit', isAuthenticated, function(req, res){
        res.render('submit');
    });
=======

    app.get('/submit', function(req, res){
        res.render('submit');
        console.log('submit req');
    })
>>>>>>> f71a3d86e20d394aba9e2b0c7869fa1aa29bb98b
};