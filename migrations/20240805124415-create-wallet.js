'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Wallets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      your_reference: {
        type: Sequelize.STRING,
        allowNull: false
      },
      balance: {
        type: Sequelize.DECIMAL(20, 2), // Adjust precision based on your requirements
        allowNull: false
      },
      earning: {
        type: Sequelize.DECIMAL(20, 2), // Adjust precision based on your requirements
        defaultValue: 0.0
      },
      bonus: {
        type: Sequelize.DECIMAL(20, 2), // Adjust precision based on your requirements
        defaultValue: 0.0
      },
      is_for: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [['user', 'campaign']] // Validates the value is either 'user' or 'campaign'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Wallets');
  }
};