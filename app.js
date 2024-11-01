const express = require('express');
const todosRoutes = require('./routes/tododb.js');
const app = express();
require('dotenv').config();
const port = process.env.PORT;


app.use(express.json());
app.use('/todos', todosRoutes);
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res)=>{
    res.render('contact');
})

app.listen(port,()=> {
    console.log(`server berjalan di http://localhost:${port}`);
});