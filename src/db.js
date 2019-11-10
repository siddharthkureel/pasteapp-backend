const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://joykureel:barcelona1@cluster0-oq88m.mongodb.net/Pastebin', {
    useNewUrlParser: true,
    useCreateIndex: true
})