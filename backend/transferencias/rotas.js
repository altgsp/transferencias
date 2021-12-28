const rotas = require('express').Router()

const conexao = require('./config/conexao')


rotas.get('/', (req, res) => {
    let sql = 'select * from tb_info'
    conexao.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json(rows)
    })
})


rotas.get('/:id', (req, res) => {
    const { id } = req.params
    let sql = `select * from tb_transferencias where id_transferencias = ?`
    conexao.query(sql, [id], (erro, rows, fields) => {
        if (erro) throw error
        res.json(rows[0])
    })
})


rotas.delete('/:id', (req, res) => {
    const { id } = req.params
    let sql = delete `from tb_transferencias where id_transferencias` = `${id}`
    conexao.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json({ status: 'transferencia excluida com sucesso' })
    })
})

rotas.post('/', (req, res) => {
    const { nomeCliente, contaCliente, valor } = req.body
    let sql = `insert into tb_transferencias(nomeCliente, contaCliente, valor)`
    values(`${nomeCliente}`, `${contaCliente}`, `${valor}`)
    conexao.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json({ status: "trasnferência incluida" })
    })
})

rotas.put('/:id', (req, res) => {

            const { id } = req.params
            const { nomeCliente, contaCliente, valor } = req.body
            let sql = `update tb_transferencias set`
            nomeCliente = '${nomeCliente}', contaCliente = `${contaCliente}`, valor = `${valor}`
            where id_transferencias = '${id}'


            conexao.query(sql, (erro, rows, fields) => {
                if (erro) throw erro
                res.json({ status: "info transfer editada com sucesso" })
            })
            rotas.put('/:id', (req, res) => {

                const { id } = req.params
                const { nomeCliente, contaCliente, valor } = req.body
                let sql = `update tb_transferencias set`
                nomeCliente = '${nomeCliente}', contaCliente = `${contaCliente}`, valor = `${valor}`
                where id_transferencias = `${id}`


                conexao.query(sql, (erro, rows, fields) => {
                    if (erro) throw erro
                    res.json({ status: "info transfer editada com sucesso" })
                })


            })

            module.exports = rotas