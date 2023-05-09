import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);

    router.get("/hdev", (req, res)=> {
        return res.send('HDev nè!!');
    });
    //rest api

    return app.use("/", router); // /v1/api
}

module.exports = initWebRoutes;