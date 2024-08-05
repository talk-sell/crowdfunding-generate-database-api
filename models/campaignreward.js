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
      CampaignReward.belongsTo(models.Campaign, { foreignKey: 'campaignId' });
    }
  }
  CampaignReward.init({
    campaignId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Campaigns',
        key: 'id'
      }
    },
    tierName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    minimumInvestment: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    perks: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'CampaignReward',
  });
  return CampaignReward;
};