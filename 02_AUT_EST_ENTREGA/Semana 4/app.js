const express = require('express');
const app = express()

const hostname = '127.0.0.1'
const port = 3000
const sqlite3 = require('sqlite3').verbose()
const DBPATH = 'banco de dados atividade.db'
app.listen(port)

  
app.post('/curriculo', (req,res)=>{
    res.statusCode = 200
    var db = new sqlite3.Database(DBPATH)
    var sql = "INSERT INTO curriculo (nome, cargo, endereço, descrição, experiência) VALUES ('" + req.body.nome + "', '" + req.body.cargo + "', '" + req.body.endereco + "','" + req.body.descricao + "','" + req.body.experiencia + "')"
    db.run(sql)
    db.close
    res.json({
        "statusCode" : 200
    })
    if (err){
        throw err
    }
})
 

app.get('/curriculo', (req, res) => {
    res.statusCode = 200
    res.setHeader('Access-Control-Allow-Origin', '*')
    var db = new sqlite3.Database(DBPATH) // Abre o banco
    var sql = 'SELECT * FROM curriculo '
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err
            }
            res.json(rows)
        })
        db.close()   // Fecha o banco
})

app.get('/curriculo', (req, res) => {
    res.statusCode = 200
    res.setHeader('Access-Control-Allow-Origin', '*')
    sql = "SELECT * FROM curriculo WHERE userId="+ req.query.userId
    console.log(sql)
    var db = new sqlite3.Database(DBPATH) // Abre o banco
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err
        }
        res.json(rows)
    })
    db.close() // Fecha o banco
})


app.post('/curriculo', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*')
    sql = "UPDATE curriculo SET nome_completo='" + req.body.nome + "', cargp = '" + req.body.cargo + "' , endereço='" + req.body.endereco + "' WHERE userId='" + req.body.userId + "'"
    console.log(sql)
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err
        }
        res.end()
    })
    res.write('<p>USUARIO ATUALIZADO COM SUCESSO!</p><a href="/">VOLTAR</a>')
    db.close() // Fecha o banco
})



