import express from "express";

let configViewEndine = (app) => {
    //arrow fnc
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs"); // same blade php
    app.set("views", "./src/views");
}
module.exports = configViewEndine;