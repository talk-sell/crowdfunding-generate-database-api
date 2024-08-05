'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InterestPayment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InterestPayment.init({
    investmentId: DataTypes.INTEGER,
    paymentDate: DataTypes.DATE,
    amount: DataTypes.DECIMAL,
    mainInvestmentReceived: DataTypes.BOOLEAN,
    remainingInterest: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'InterestPayment',
  });
  return InterestPayment;
};