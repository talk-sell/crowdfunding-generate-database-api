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
      Investments.belongsTo(models.User, { foreignKey: 'user_id' });
      Investments.belongsTo(models.Campaign, { foreignKey: 'campaign_id' });
    }
  }
  Investments.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Campaigns',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.DECIMAL(20, 2), // Adjust precision based on your requirements
      allowNull: false
    },
    interestRate: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false
    },
    remaining_interest: {
      type: DataTypes.DECIMAL(20, 2), // Adjust precision based on your requirements
      defaultValue: 0.0
    },
    invested_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Investments',
  });
  return Investments;
};