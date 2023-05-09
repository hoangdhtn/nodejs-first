import express from "express";
import bodyParser from "body-parser"; // /user?id=7
import viewEngine from "./config/viewEngine";
import initWebRouters from "./route/web";
require('dotenv').config();

let app = express();

// config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

viewEngine(app);
initWebRouters(app);


let port = process.env.PORT || 6969;
// port === underfine => port = 6969

app.listen(port, ()=> {
    //callback
    console.log("Backend nodejs is running on the port: " + port);
});

