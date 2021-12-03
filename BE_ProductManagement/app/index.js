const express = require('express');
const app = express();
const { port } = require('../utils/config');
const router = require('./routers/root.router');
const cors = require('cors');
const { sequelize } = require('./models/root.model');

//Fix cors in browser when call api
app.use(cors());

app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//Sync with database
sequelize.sync({ alter: true });