const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);
connection.connect((error)=>{
  if(error)throw error
  console.log('connection seccesfuly')
})

module.exports = {connection}