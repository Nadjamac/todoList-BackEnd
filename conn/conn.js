
const mongoose = require('mongoose');

function conn(url, user, pass, banco){
    mongoose.connect(`${url}/${banco}`, {
        user: user,
        pass: pass,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Base de dados conectada com sucesso!!');
    }).catch((err) => {
        console.error(err);
    });
}

module.exports = conn;