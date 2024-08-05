'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Beneficiaries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bank_account_holder_name: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      payment_types: {
        type: Sequelize.STRING
      },
      beneficiary_address: {
        type: Sequelize.STRING
      },
      beneficiary_country: {
        type: Sequelize.STRING
      },
      beneficiary_entity_type: {
        type: Sequelize.STRING
      },
      beneficiary_company_name: {
        type: Sequelize.STRING
      },
      beneficiary_first_name: {
        type: Sequelize.STRING
      },
      beneficiary_last_name: {
        type: Sequelize.STRING
      },
      beneficiary_city: {
        type: Sequelize.STRING
      },
      beneficiary_postcode: {
        type: Sequelize.STRING
      },
      beneficiary_state_or_province: {
        type: Sequelize.STRING
      },
      beneficiary_date_of_birth: {
        type: Sequelize.DATE
      },
      beneficiary_identification_type: {
        type: Sequelize.STRING
      },
      beneficiary_identification_value: {
        type: Sequelize.STRING
      },
      bank_country: {
        type: Sequelize.STRING
      },
      bank_name: {
        type: Sequelize.STRING
      },
      bank_account_type: {
        type: Sequelize.STRING
      },
      currency: {
        type: Sequelize.STRING
      },
      account_number: {
        type: Sequelize.STRING
      },
      routing_code_type_1: {
        type: Sequelize.STRING
      },
      routing_code_value_1: {
        type: Sequelize.STRING
      },
      routing_code_type_2: {
        type: Sequelize.STRING
      },
      routing_code_value_2: {
        type: Sequelize.STRING
      },
      bic_swift: {
        type: Sequelize.STRING
      },
      iban: {
        type: Sequelize.STRING
      },
      default_beneficiary: {
        type: Sequelize.BOOLEAN
      },
      creator_contact_id: {
        type: Sequelize.INTEGER
      },
      bank_address: {
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
    await queryInterface.dropTable('Beneficiaries');
  }
};