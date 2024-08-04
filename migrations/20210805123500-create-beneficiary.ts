import { QueryInterface, DataTypes } from 'sequelize';

export = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('beneficiaries', {
      beneficiary_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      bank_account_holder_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      payment_types: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      beneficiary_address: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      beneficiary_country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      beneficiary_entity_type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      beneficiary_company_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      beneficiary_first_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      beneficiary_last_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      beneficiary_city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      beneficiary_postcode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      beneficiary_state_or_province: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      beneficiary_date_of_birth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      beneficiary_identification_type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      beneficiary_identification_value: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bank_country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bank_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bank_account_type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      account_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      routing_code_type_1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      routing_code_value_1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      routing_code_type_2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      routing_code_value_2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bic_swift: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      iban: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      default_beneficiary: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      creator_contact_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bank_address: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      beneficiary_external_reference: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      business_nature: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      company_website: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('beneficiaries');
  },
};
