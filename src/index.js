require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('./database/mongoose');
app.use(express.json());
const userRouter = require('./routes/user');
const playlistRouter = require('./routes/PassWork');
app.use(express.static('public'));

app.use(userRouter);
app.use(playlistRouter);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
