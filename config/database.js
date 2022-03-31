const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://userProf:prof1234@cluster0.nwf8p.mongodb.net/ac1tri')
}

module.exports = conexao
