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
    your_reference: {
      type: DataTypes.STRING,
      allowNull: false
    },
    balance: {
      type: DataTypes.DECIMAL(20, 2), // Adjust precision based on your requirements
      allowNull: false
    },
    earning: {
      type: DataTypes.DECIMAL(20, 2), // Adjust precision based on your requirements
      defaultValue: 0.0
    },
    bonus: {
      type: DataTypes.DECIMAL(20, 2), // Adjust precision based on your requirements
      defaultValue: 0.0
    },
    is_for: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['user', 'campaign']] // Validates the value is either 'user' or 'campaign'
      }
    }
  }, {
    sequelize,
    modelName: 'Wallet',
  });
  return Wallet;
};