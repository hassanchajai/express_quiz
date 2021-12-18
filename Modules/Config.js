 const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "MySchool"

});

const Connexion = con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const CommunicationDB = (SQL)=>{
    con.query(SQL , function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
}

CommunicationDB("CREATE DATABASE IF NOT EXISTS MySchool")
CommunicationDB("CREATE TABLE  IF NOT EXISTS Users (id INT AUTO_INCREMENT PRIMARY KEY ,FullName VARCHAR(255), Email VARCHAR(255) , Password VARCHAR(255))")

module.exports = {con};