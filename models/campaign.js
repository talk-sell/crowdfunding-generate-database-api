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
      Campaign.belongsTo(models.Project, { foreignKey: 'projectId' });
    }
  }
  Campaign.init({
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Projects',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    videoUrl: {
      type: DataTypes.STRING
    },
    fundingStartDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fundingEndDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    min_investment: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    min_funding: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    max_funding: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    numberOfInvestors: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    interestRate: {
      type: DataTypes.DECIMAL(5, 2)
    },
    fundingProgress: {
      type: DataTypes.DECIMAL(5, 2),
      defaultValue: 0.0
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Campaign',
  });
  return Campaign;
};