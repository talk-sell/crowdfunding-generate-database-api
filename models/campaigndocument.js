'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CampaignDocument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CampaignDocument.init({
    campaignId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    file: DataTypes.STRING,
    approved: DataTypes.BOOLEAN,
    message: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CampaignDocument',
  });
  return CampaignDocument;
};