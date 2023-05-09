let getHomePage = (req, res) => {
    // return res.send("Hello from controllers");
    return res.render('homepage.ejs');
}

module.exports = {
    getHomePage: getHomePage, // Key : Value
}