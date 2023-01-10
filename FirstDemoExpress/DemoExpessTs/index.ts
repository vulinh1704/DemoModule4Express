import express from 'express';
import {router} from "./src/router/router";
import bodyParser from "body-parser";
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';

const app = express();
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/demo_dbC09').then(() => {
    console.log('Connect Database Success')
})
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(fileUpload({
    createParentPath: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use('', router);

app.listen(3000, () => {
    console.log('Server is running')
})