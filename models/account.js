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
    account_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    legal_entity_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    street: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    postal_code: {
      type: DataTypes.STRING
    },
    brand: {
      type: DataTypes.STRING
    },
    your_reference: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state_or_province: {
      type: DataTypes.STRING
    },
    spread_table: {
      type: DataTypes.STRING
    },
    api_trading: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    online_trading: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    phone_trading: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    identification_type: {
      type: DataTypes.STRING
    },
    identification_value: {
      type: DataTypes.STRING
    },
    terms_and_conditions_accepted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};