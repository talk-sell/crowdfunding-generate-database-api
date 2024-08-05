'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beneficiary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Beneficiary.init({
    bank_account_holder_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    payment_types: {
      type: DataTypes.STRING
    },
    beneficiary_address: {
      type: DataTypes.STRING
    },
    beneficiary_country: {
      type: DataTypes.STRING
    },
    beneficiary_entity_type: {
      type: DataTypes.STRING
    },
    beneficiary_company_name: {
      type: DataTypes.STRING
    },
    beneficiary_first_name: {
      type: DataTypes.STRING
    },
    beneficiary_last_name: {
      type: DataTypes.STRING
    },
    beneficiary_city: {
      type: DataTypes.STRING
    },
    beneficiary_postcode: {
      type: DataTypes.STRING
    },
    beneficiary_state_or_province: {
      type: DataTypes.STRING
    },
    beneficiary_date_of_birth: {
      type: DataTypes.DATE
    },
    beneficiary_identification_type: {
      type: DataTypes.STRING
    },
    beneficiary_identification_value: {
      type: DataTypes.STRING
    },
    bank_country: {
      type: DataTypes.STRING
    },
    bank_name: {
      type: DataTypes.STRING
    },
    bank_account_type: {
      type: DataTypes.STRING
    },
    currency: {
      type: DataTypes.STRING
    },
    account_number: {
      type: DataTypes.STRING
    },
    routing_code_type_1: {
      type: DataTypes.STRING
    },
    routing_code_value_1: {
      type: DataTypes.STRING
    },
    routing_code_type_2: {
      type: DataTypes.STRING
    },
    routing_code_value_2: {
      type: DataTypes.STRING
    },
    bic_swift: {
      type: DataTypes.STRING
    },
    iban: {
      type: DataTypes.STRING
    },
    default_beneficiary: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    creator_contact_id: {
      type: DataTypes.INTEGER
    },
    bank_address: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Beneficiary',
  });
  return Beneficiary;
};