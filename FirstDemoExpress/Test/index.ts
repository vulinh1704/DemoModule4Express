import express from 'express';
import {router} from "./src/router/router";
import bodyParser from "body-parser";
import fileUpload from 'express-fileupload';
import session from 'express-session';


const app = express();
app.set('views', './src/views')
app.set('view engine', 'ejs');
app.use(express.static('./public'))
app.use(fileUpload({
    createParentPath: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use('', router)
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'Ning',
    cookie: {maxAge: 60000}
}));


app.get('/set', (req, res) => {
    // @ts-ignore
    req.session.User = {
        username: '1',
        password: '1'
    }
    return res.status(200).json({status: 'success'})
})

app.get('/get_session', (req, res) => {
    // @ts-ignore
    if (req.session.User) {
        // @ts-ignore
        return res.status(200).json({status: 'success', session: req.session.User})
    }
    return res.status(200).json({status: 'error', session: 'No session'})
})
app.listen(8080, () => {
    console.log('Server is running!');
});


