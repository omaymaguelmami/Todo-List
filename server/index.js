
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
    const sqlInsert =` INSERT INTO list (items,chek) VALUES ("${req.body.items }" , ${false})`
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

app.patch('/api/update/:id', (req,res)=>{
    console.log(req.body)
    connection.query(`UPDATE list SET chek=${req.body.chek} WHERE id="${req.params.id}"`, 
     (err, result)=> {
        if(err){
            res.status(500).send(err)

        }
        res.status(201).send('item update') 

    })


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














