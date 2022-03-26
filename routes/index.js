module.exports = (app) => {
    app.get('/', async(req, res) => {
        var conexao = require('../config/database')
        conexao()

        var modelo = require('../models/metas')
        var documentos = await modelo.find()

        res.render('index.ejs',{resultado:documentos})
    })

}