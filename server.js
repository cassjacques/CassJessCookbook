const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;






app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: false}));




app.get('/', (req, res) => {

});







app.listen(PORT, () => console.log(`Server running on port ${PORT}`));