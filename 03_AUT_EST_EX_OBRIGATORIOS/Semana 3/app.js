const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'banco de dados atividade.db'; //use o nome que você achar melhor para o banco de dados

app.use(express.json());
app.get('/curriculo', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM curriculo';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});


app.get('/formacao', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM formacao';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
                throw err;
         }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});


app.get('/realizações', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM realizações';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
                throw err;
         }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});
