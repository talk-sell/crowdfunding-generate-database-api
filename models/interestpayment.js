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
      InterestPayment.belongsTo(models.Investments, { foreignKey: 'investmentId' });
    }
  }
  InterestPayment.init({
    investmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Investments',
        key: 'id'
      }
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(20, 2), // Adjust precision based on your requirements
      allowNull: false
    },
    mainInvestmentReceived: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    remainingInterest: {
      type: DataTypes.DECIMAL(20, 2), // Adjust precision based on your requirements
      defaultValue: 0.0
    }
  }, {
    sequelize,
    modelName: 'InterestPayment',
  });
  return InterestPayment;
};