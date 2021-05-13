
const express = require('express');
const bodyParser = require('body-parser');
const {connection} = require('./db/index.js')
const cors = require('cors')


const app = express();
const PORT = 3000;
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));

app.post("/api/insert", (req,res)=> {
    console.log(req.body);
    const sqlInsert = `INSERT INTO list (items) VALUES ("${req.body.items}")`
    connection.query(sqlInsert, (err, result) => {
        if(err){
            res.status(500).send(err)
            
        }
        res.status(201).send(result) 
        
    });
});

app.get('/api/get' , (req, res) => {
    const sqlInsert = `SELECT * FROM list`;
    connection.query(sqlInsert, (err, result) => {
        if(err){
            res.status(500).send(err)
            
        }
        res.status(201).send(result) 
    });
})

app.delete('/api/delete/:id', (req,res)=>{
    connection.query(`DELETE FROM list WHERE id="${req.params.id}" `, 
     (err, result)=> {
        if(err){
            res.status(500).send(err)
            
        }
        res.status(201).send('item deleted') 
    })


})
    
       



app.listen(PORT, () => {
  console.log(`listening on  http://localhost:${PORT}`)
});

















