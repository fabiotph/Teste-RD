const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const { PORT } = require('./config.json');

const route = require('./src/routes/route');


app.use(bodyParser.json());
app.use('/route', route);

app.listen(PORT, (err)=>{
    if (err) console.log(err);
    console.log(`Server on, listening on port ${PORT}`);
})