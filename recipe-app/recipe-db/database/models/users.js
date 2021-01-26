const Sequelize = require('sequelize');
const db = require('../db');

const User = db.sequelize.define('user', {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
	},

	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
	},

	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isEmail: true
		}

	},

	username: {
		type: Sequelize.STRING,
		allowNull: false,
		
	},

	imageUrl: {
		type: Sequelize.STRING,
		isURL: true,
		defaultValue: 'https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg',
    },
    
    skill: {
        type: Sequelize.STRING,
		allowNull: false,
		defaultValue: 'Amateur'
    }
});

module.exports = User;