'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      login_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      account_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Accounts', // assuming you have an Accounts table
          key: 'id'
        }
      },
      account_name: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      locale: {
        type: Sequelize.STRING
      },
      timezone: {
        type: Sequelize.STRING
      },
      email_address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mobile_phone_number: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      your_reference: {
        type: Sequelize.STRING
      },
      date_of_birth: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Contacts');
  }
};