const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require("./app/models");



var app = express();

app.use(cors())
app.use(bodyParser.json());

// app.use('/', (req,res)=>{
//     console.log("Server is ruuning");
// })


db.sequelize.sync({force: true})
.then(() =>{
    console.log("DB is Connected ...........");
})
.catch((err) =>{
    console.log("DB is not Connected " + err.message);
})



app.listen(3000, ()=>{
    console.log(`Server running in prot 3000.`);
})
require("./app/routes/category.routes");