require('babel-register');

const dbConfig = require('./server/config/database');

module.exports = Object.assign({}, dbConfig.default, {
    migrations: {
        tableName: 'migrations',
        directory: './src/migrations'
    }
});