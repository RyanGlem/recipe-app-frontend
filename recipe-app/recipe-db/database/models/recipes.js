const Sequelize = require('sequelize')
const db = require ('../db')

const Recipe = db.sequelize.define('recipe', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},

	description: {
		type: Sequelize.STRING,
		allowNull: false,
	},

	username: {
		type: Sequelize.STRING,
		allowNull: false,
		isEmail: true,
	},

	imageUrl: {
		type: Sequelize.STRING,
		isURL: true,
		defaultValue: '',
	},
});

module.exports = Recipe