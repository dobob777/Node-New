const express = require('express');
const app = express();
const router = express.Router()

const data = require('./json/postdata.json')

const User = require('./Schema/userSchema')

router.get('/all-users', async (req, res) => {
    const allData = await User.find({})
    res.send(allData)
})

router.post('/add-data', async (req, res) => {
    console.log('req.body::: ', req.body);
    const { nameOfStd, emailOfStd, phoneOfStd } = req.body

    const addUser = await User.create({
        name: nameOfStd,
        email: emailOfStd,
        phone: phoneOfStd,
        password: req.body.passwordOfStd
    })

    res.send(addUser)
})

module.exports = router