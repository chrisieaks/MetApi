const db = require('../models');
const passport = require('../config/passport');
module.exports = function(app){

    app.post(
      "/api/login",
      passport.authenticate("local", { failureRedirect: "/login" }),
      function(req, res) {
        // console.log(req.user);
        res.send('/');
      }
    );

    // app.post('/api/login', passport.authenticate('local'), function(req, res){
    //     
    // });

    app.post('/api/signup', function(req, res){
        //Double Check DB name
        console.log(req.body.email, req.body.password);
        db.Authors.create({
            email: req.body.email,
            password: req.body.password
        }).then(function(){
            console.log("before redirect");
            res.json({success: true, message: 'go to login my guy'});
            console.log("after redirect");
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