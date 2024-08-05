'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transfer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transfer.init({
    source_account_id: DataTypes.INTEGER,
    destination_account_id: DataTypes.INTEGER,
    currency: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    status: DataTypes.STRING,
    reason: DataTypes.TEXT,
    unique_request_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transfer',
  });
  return Transfer;
};