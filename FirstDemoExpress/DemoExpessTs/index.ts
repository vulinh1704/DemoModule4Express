import express from 'express';
import {router} from "./src/router/router";
import bodyParser from "body-parser";
import fileUpload from 'express-fileupload';

const app = express();
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