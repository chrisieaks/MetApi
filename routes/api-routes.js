const db = require('../models');
const passport = require('../config/passport');
module.exports = function(app){
    app.post('/api/login', passport.authenticate('local'), function(req, res){
        
    });

    app.post('/api/signup', function(req, res){
        //Double Check DB name
        console.log(req.body.email, req.body.password);
        db.Authors.create({
            email: req.body.email,
            password: req.body.password
        }).then(function(){
            res.redirect(307, '/api/login');
        }).catch(function(err){
            console.log(err);
            res.json(err);
        });
    });

    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });
};