const express = require('express');
const router = express.Router()

const Users = require('./Schema/userSchema')

router.post('/Add-data', async (req, res) => {
    console.log(req.body);
    const { nameOfStd, emailOfStd, passwordOfStd } = req.body

    const addUsers = await Users.create({
        name: nameOfStd,
        email: emailOfStd,
        password: passwordOfStd
    })
    res.send(addUsers)
})

router.delete('/delete/:id', async (req, res) => {
    const deleteData = await Users.findByIdAndDelete(req.params.id)
    if (deleteData) {
        res.send({ massage: "Data Delete..." })
    } else {
        res.send({ massage: "User Not fond..." })
    }
})

module.exports = router

