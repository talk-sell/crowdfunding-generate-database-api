'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserIdentities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // assuming you have a Users table
          key: 'id'
        }
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      documentNumber: {
        type: Sequelize.STRING
      },
      documentType: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      postalCode: {
        type: Sequelize.STRING
      },
      street: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      addressOptional: {
        type: Sequelize.STRING
      },
      issueDate: {
        type: Sequelize.DATE
      },
      expirationDate: {
        type: Sequelize.DATE
      },
      countryOfIssue: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('UserIdentities');
  }
};