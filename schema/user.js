const mongodb = require('mongoose');

const userSchema = new mongodb.Schema({
    email: String,
    senha: String,
    nome: String,
    tel: String,
    status: Boolean
});

const User = mongodb.model('Item', userSchema);

module.exports = User;