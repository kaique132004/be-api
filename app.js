require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Importe o body-parser para analisar o corpo das solicitações POST.

const app = express();
const PORT = process.env.PORT || 3000;

const User = require('./schema/user');

mongoose.connect(`${process.env.DB_URI}`, { authSource: "admin", user: `${process.env.DB_USERNAME}`, pass: `${process.env.DB_PASSWORD}` })
    .then(() => {
        console.log('Conectado ao MongoDB');
    })
    .catch((error) => {
        console.error('Falha na conexão com o MongoDB: ' + error);
    });

// Adicione o middleware body-parser para analisar o corpo das solicitações POST.
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello, World!');
});

app.post('/create-user', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/find-user', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

app.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`);
});
