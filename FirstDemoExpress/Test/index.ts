import express from 'express';
import {router} from "./src/router/router";
import bodyParser from "body-parser";
import fileUpload from 'express-fileupload';

const app = express();
app.set('views', './src/views')
app.set('view engine', 'ejs');
app.use(express.static('./public'))
app.use(fileUpload({
    createParentPath: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('', router)
app.listen(3000, () => {
    console.log('Server is running!');
});

// app.get('/home', (req, res) => {
//     let name = 'Nam';
//     res.render('home', {user: name})
// })
// app.get('/post/:id', (req, res) => {
//     console.log('Param ' + req.params.id)
//     res.send(req.params.id);
// })