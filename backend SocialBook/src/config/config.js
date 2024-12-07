const mongoose = require('mongoose');
const dbconnect = () =>  {
    mongoose.set('strictQuery', true);
    mongoose.connect('mongodb://localhost:27017/SocialBook')
    .then(() => console.log('Conexión a la base de datos exitosa'))
    .catch((err) => console.error('Error al conectar a la base de datos', err));
}

module.exports = dbconnect;
