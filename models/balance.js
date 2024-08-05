'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Balance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Balance.init({
    account_id: DataTypes.INTEGER,
    currency: DataTypes.STRING,
    amount: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Balance',
  });
  return Balance;
};