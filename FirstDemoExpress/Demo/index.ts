import express from 'express';

const app = express();
app.set('view engine' , 'ejs');
app.set('views', './src/views');
app.use(express.static('./public'))
app.use(express.json());


app.get('/home', (req, res) => {
    let name = 'Đại'
    res.render('home' , {user : name})
})



// app.post('/home', (req, res) => {
//     console.log(req.body)
//     res.send(req.body);
// })
//
// app.get('/home/:id', (req, res) => {
//     console.log('Param : ' + req.params.id)
//     res.send(req.params.id)
// })

app.listen(3000, () => {
    console.log('Server is running')
})