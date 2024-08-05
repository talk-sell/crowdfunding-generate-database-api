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
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      account_id: {
        type: Sequelize.INTEGER
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
        type: Sequelize.STRING
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