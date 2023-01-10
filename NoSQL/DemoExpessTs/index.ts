import express from 'express';
import {router} from "./src/router/router";
import bodyParser from "body-parser";
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';

const app = express();
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(fileUpload({
    createParentPath: true
}));
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/test').then(() => {
    console.log('Connect success')
}).catch(() => {
    console.log('Error')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
// app.use(session({
//     resave: true,
//     saveUninitialized: true,
//     secret: 'somesecret',
//     cookie: { maxAge: 60000 }}));
app.use('', router);

app.listen(3000, () => {
    console.log('Server is running')
})

// app.get('/login', (req, res) => {
//     // @ts-ignore
//     req.session.User = {
//         username: 'linh',
//         password: '1'
//     }
//
//     return res.status(200).json({status: 'success'})
// })
//
// app.get('/get_session', (req, res) => {
//     // @ts-ignore
//     if(req.session.User){
//         // @ts-ignore
//         return res.status(200).json({status: 'success', session: req.session.User})
//     }
//     return res.status(200).json({status: 'error', session: 'No session'})
// })