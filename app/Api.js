const express = require('express');
const router = express.Router()

const Users = require('./Schema/userSchema')

router.post('/Add-data', async (req, res) => {
    console.log(req.body);
    const { name, email, password, phone } = req.body

    const addUsers = await Users.create({
        name: name,
        email: email,
        password: password,
        phone: phone
    })
    res.send(addUsers)
})

router.get('/all', async (req, res) => {
    const aaa = await Users.find({});
    return res.send(aaa);
})

router.delete('/delete/:id', async (req, res) => {
    const deleteData = await Users.findByIdAndDelete(req.params.id)
    if (deleteData) {
        res.send({ massage: "Data Delete..." })
    } else {
        res.send({ massage: "User Not fond..." })
    }
})

router.get('/edit/:id', async (req, res) => {
    const editData = await Users.findById(req.params.id)
    return res.send(editData);
})

router.put('/update', async (req, res) => {
    const updateData = await Users.findByIdAndUpdate(
        req.body._id, req.body
    )
    return res.send(updateData)
})
module.exports = router

