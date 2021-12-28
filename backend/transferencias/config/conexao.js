require('dotenv').config()
const mysql = require('mysql')
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'db_transferencia'
})

conexao.connect((erro) => {
    if (erro) throw erro
    console.log('Estamos conectados com a base de dados')
})

module.exports = conexao