const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors())
// var urlCors = { origin: "http://localhost:3000" }
// app.use(cors(urlCors))

// JSON enabled
const { json } = require('express');
app.use(json());

require('./app/DB/connetion')

app.listen(3500, () => {
    console.log('Port Started 3500...');
})

app.get('/', (req, res) => {
    res.send('backend connected...')
})

app.use('/api', require('./app/Api'))