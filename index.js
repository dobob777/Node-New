const express = require('express');
const app = express();
const path = require('path');

const cors = require('cors');
app.use(cors())
// var urlCors = { origin: "http://localhost:3000" }
// app.use(cors(urlCors))

// JSON enabled
const { json } = require('express');
app.use(json());

app.use(express.static(path.join(__dirname, 'app/DB')));

require('./app/DB/connetion')

app.listen(3500, () => {
    console.log('Port Started 3500...');
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'hello.html'));
    // res.send('backend connected...')
})

app.use('/api', require('./app/Api'))