const express = require('express');
const app = express();

// JSON enabled
const { json } = require('express');
app.use(json());

app.listen(3500, () => {
    console.log('Port Started 3500...');
})

app.get('/', (req, res) => {
    res.send('backend connected...')
})

app.use('/api', require('./app/Api'))