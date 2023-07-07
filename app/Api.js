const express = require('express');
const app = express();
const router = express.Router()

const data = require('./json/postdata.json')

router.get('/my-json', (req, res) => {
    // any function added
    res.send(data)
})

router.post('/add-data', (req, res) => {
    const abc = [];
    abc.push(req.body)
    // any function added

    res.send(abc)
})

module.exports = router