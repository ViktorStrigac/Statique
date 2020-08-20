const express = require('express');
const path = require('path');
//var fs = require('fs');

const app = express();

//PORT
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Running on port ${port}...`));

//Route to static HTML
app.use(express.static('public'));
