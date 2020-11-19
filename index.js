const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/myRoutes');


const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);


app.get('/name', (req, res) => {
    res.status(200).send('WELCOME TO MY API')
});

const port = 3000;

app.listen(port);