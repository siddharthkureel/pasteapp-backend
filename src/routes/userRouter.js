const express = require('express');
const router = new express.Router();
const User = require('../models/User');
const Auth = require('../middleware/Auth');
router.post('/user', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save()
        const token = await user.generateAuthToken();
        res.status(200).send({
            user,
            token
        });
    } catch (e) {
        res.status(500).send(e)
    }
})
router.get('/userinfo', Auth, async (req, res) => {
    try {
        res.send(req.user)
    }catch (e){
        console.log(e)
    }
})
module.exports = router