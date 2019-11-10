require('events').EventEmitter.defaultMaxListeners = 0
const express = require('express');
require('./db');
var cors = require('cors')
const postRouter = require('./routes/postRouter');
const userRouter = require('./routes/userRouter');
const app = express();
const port = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());
app.use(postRouter);
app.use(userRouter);
app.listen(port);