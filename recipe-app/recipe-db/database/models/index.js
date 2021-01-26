// Here, we can prepare to register our models,
//set up associations between tables,
const db = require('../db')
const User = require('./users');
const Recipe = require('./recipes')

User.hasMany(Recipe)
Recipe.belongsTo(User)


db.sequelize.sync({alter: true})



module.exports = {
	User,
	Recipe
};
