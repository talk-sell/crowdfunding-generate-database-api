'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Account.init({
    account_name: DataTypes.STRING,
    legal_entity_type: DataTypes.STRING,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    brand: DataTypes.STRING,
    your_reference: DataTypes.STRING,
    status: DataTypes.STRING,
    state_or_province: DataTypes.STRING,
    spread_table: DataTypes.STRING,
    api_trading: DataTypes.BOOLEAN,
    online_trading: DataTypes.BOOLEAN,
    phone_trading: DataTypes.BOOLEAN,
    identification_type: DataTypes.STRING,
    identification_value: DataTypes.STRING,
    terms_and_conditions_accepted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};