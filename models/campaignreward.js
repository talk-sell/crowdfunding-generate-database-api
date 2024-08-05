'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CampaignReward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CampaignReward.init({
    campaignId: DataTypes.INTEGER,
    tierName: DataTypes.STRING,
    minimumInvestment: DataTypes.DECIMAL,
    perks: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CampaignReward',
  });
  return CampaignReward;
};