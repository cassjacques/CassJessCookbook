const express = require('express');
const userController = require('./controllers/userController');
const recipeController = require('./controllers/recipeController');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4600;

app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    // const context = {
    //     meta: {
    //         title: 'Let\'s get cookin!'
    //     }
    // };
    // res.render('index', context);
    res.redirect('/users/login');
});

app.use('/recipes', recipeController);
app.use('/users', userController);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));