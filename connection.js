var Sequelize = require('sequelize');
var sequelize;

if (require('./env') == 'production') {
    // On Heroku
} else {
    sequelize = new Sequelize('blog_development', 'dragonfly', 'dragonfly', {
        host: 'localhost',
        dialect: 'postgres',

        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });
}

module.exports = sequelize;