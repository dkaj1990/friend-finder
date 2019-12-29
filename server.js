const express = require("express");
const path = require("path");

//Initialize express
const app = express();

//Define port
const PORT = process.env.PORT || 8080; 

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, ()=> {
    console.log("The server is listening on " + PORT);
});

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);