'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Campaign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Campaign.init({
    projectId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    videoUrl: DataTypes.STRING,
    fundingStartDate: DataTypes.DATE,
    fundingEndDate: DataTypes.DATE,
    min_investment: DataTypes.DECIMAL,
    min_funding: DataTypes.DECIMAL,
    max_funding: DataTypes.DECIMAL,
    numberOfInvestors: DataTypes.INTEGER,
    interestRate: DataTypes.DECIMAL,
    fundingProgress: DataTypes.DECIMAL,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Campaign',
  });
  return Campaign;
};