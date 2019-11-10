const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
})
schema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'PasteBinAppBySiddharthKureel')
    user.tokens = user.tokens.concat({ token: token });
    user.save();
    return token
}
const User = mongoose.model('User', schema);
module.exports = User;
