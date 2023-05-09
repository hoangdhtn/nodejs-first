import { json } from 'body-parser';
import db from '../models/index';

let getHomePage =  async(req, res) => {
    // return res.send("Hello from controllers");
    try {
        let data = await db.User.findAll();
       
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getHomePage: getHomePage, // Key : Value
}