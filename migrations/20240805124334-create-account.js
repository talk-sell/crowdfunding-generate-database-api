'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      account_name: {
        type: Sequelize.STRING
      },
      legal_entity_type: {
        type: Sequelize.STRING
      },
      street: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      postal_code: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      your_reference: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      state_or_province: {
        type: Sequelize.STRING
      },
      spread_table: {
        type: Sequelize.STRING
      },
      api_trading: {
        type: Sequelize.BOOLEAN
      },
      online_trading: {
        type: Sequelize.BOOLEAN
      },
      phone_trading: {
        type: Sequelize.BOOLEAN
      },
      identification_type: {
        type: Sequelize.STRING
      },
      identification_value: {
        type: Sequelize.STRING
      },
      terms_and_conditions_accepted: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Accounts');
  }
};