const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

const app = express();

const exphbs = require('express-handlebars');

const db = require('./models');


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./routes/api-routes.js')(app);
require('./routes/html-routes')(app);

db.sequelize.sync({ force: true }).then(function(){
    app.listen(PORT, function(){
        console.log(`App listening on PORT: ${PORT}`);
    });
});


