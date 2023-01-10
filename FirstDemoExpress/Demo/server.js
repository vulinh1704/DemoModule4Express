const express = require('express');
const session = require('express-session');
const app = express();
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'somesecret',
    cookie: { maxAge: 60000 }}));

app.listen(3000,  "127.0.0.1", function () {
    console.log("Example app listening at http://%s:%s")

});
//set session
app.get('/login', (req, res) => {
    //set a object to session
    req.session.User = {
        username: 'linh',
        password: '1'
    }

    return res.status(200).json({status: 'success'})
})

//set session
app.get('/get_session', (req, res) => {
    if(req.session.User){
        return res.status(200).json({status: 'success', session: req.session.User})
    }
    return res.status(200).json({status: 'error', session: 'No session'})
})

//destroy session
app.get('/destroy_session', (req, res) => {
    //destroy session
    req.session.destroy(function(err) {
        return res.status(200).json({status: 'success', session: 'cannot access session here'})
    })
})