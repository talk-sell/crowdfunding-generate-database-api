'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Investments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Investments.init({
    user_id: DataTypes.INTEGER,
    campaign_id: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    interestRate: DataTypes.DECIMAL,
    remaining_interest: DataTypes.DECIMAL,
    invested_at: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Investments',
  });
  return Investments;
};