const express = require('express');
const userController = require('./controllers/userController');
const recipeController = require('./controllers/recipeController');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4600;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req, res) => {
    const context={
        meta: {
            title: 'Let\'s get cookin!'
        }
    };

    res.render('index', context);
});

app.use('/recipes', recipeController);
app.use('/users', userController);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
