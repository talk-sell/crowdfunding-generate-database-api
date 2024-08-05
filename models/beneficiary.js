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
    bank_account_holder_name: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    payment_types: DataTypes.STRING,
    beneficiary_address: DataTypes.STRING,
    beneficiary_country: DataTypes.STRING,
    beneficiary_entity_type: DataTypes.STRING,
    beneficiary_company_name: DataTypes.STRING,
    beneficiary_first_name: DataTypes.STRING,
    beneficiary_last_name: DataTypes.STRING,
    beneficiary_city: DataTypes.STRING,
    beneficiary_postcode: DataTypes.STRING,
    beneficiary_state_or_province: DataTypes.STRING,
    beneficiary_date_of_birth: DataTypes.DATE,
    beneficiary_identification_type: DataTypes.STRING,
    beneficiary_identification_value: DataTypes.STRING,
    bank_country: DataTypes.STRING,
    bank_name: DataTypes.STRING,
    bank_account_type: DataTypes.STRING,
    currency: DataTypes.STRING,
    account_number: DataTypes.STRING,
    routing_code_type_1: DataTypes.STRING,
    routing_code_value_1: DataTypes.STRING,
    routing_code_type_2: DataTypes.STRING,
    routing_code_value_2: DataTypes.STRING,
    bic_swift: DataTypes.STRING,
    iban: DataTypes.STRING,
    default_beneficiary: DataTypes.BOOLEAN,
    creator_contact_id: DataTypes.INTEGER,
    bank_address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Beneficiary',
  });
  return Beneficiary;
};