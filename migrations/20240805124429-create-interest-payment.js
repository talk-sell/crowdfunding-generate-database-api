'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InterestPayments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      investmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Investments', // assuming you have an Investments table
          key: 'id'
        }
      },
      paymentDate: {
        type: Sequelize.DATE
      },
      amount: {
        type: Sequelize.DECIMAL(20, 2), // Adjust precision based on your requirements
        allowNull: false
      },
      mainInvestmentReceived: {
        type: Sequelize.BOOLEAN
      },
      remainingInterest: {
        type: Sequelize.DECIMAL(20, 2), // Adjust precision based on your requirements
        defaultValue: 0.0
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
    await queryInterface.dropTable('InterestPayments');
  }
};