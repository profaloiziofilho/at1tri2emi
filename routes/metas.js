module.exports = (app) => {
    app.get('/metas', (req, res) => {
        res.render('metas.ejs')
    })

    app.post('/metas', (req, res) => {
        var conexao = require('../config/database')
        conexao()

        var modelo = require('../models/metas')

        var documento = new modelo({
                texto: req.body.texto
            })
            .save()
            .then(() => {
                res.redirect('/metas')
            })
            .catch(() => {
                res.send("Não é possível gravar o documento no Banco de Dados. Alguns alunos postaram termos chulos e inadequados para o ambiente escolar")
            })
    })

}
