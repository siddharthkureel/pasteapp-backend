const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'PasteBinAppBySiddharthKureel');
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
        req.token = token;
        req.user = user;
        next();
    } catch (e) {
        console.log(e)
        res.status(401).send({ error: 'please authenticate' })
    }

}
module.exports = auth;