'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Wallet.init({
    your_reference: DataTypes.STRING,
    balance: DataTypes.DECIMAL,
    earning: DataTypes.DECIMAL,
    bonus: DataTypes.DECIMAL,
    is_for: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Wallet',
  });
  return Wallet;
};