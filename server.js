const express = require('express');
const bodyParser = require('body-parser');
const usersController = require('./controllers/userController');
const app = express();
const PORT = process.env.PORT || 3000;

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

app.use('/', usersController);






app.listen(PORT, () => console.log(`Server running on port ${PORT}`));