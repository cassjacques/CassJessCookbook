const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('login');
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));