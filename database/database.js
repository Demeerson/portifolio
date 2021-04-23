const Sequelize =require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root','abril02041994dem',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
