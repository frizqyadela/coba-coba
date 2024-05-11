const Sequelize = require('sequelize');

const db = new Sequelize('coba_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;