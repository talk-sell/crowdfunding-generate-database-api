'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserIdentity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserIdentity.init({
    userId: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    nationality: DataTypes.STRING,
    documentNumber: DataTypes.STRING,
    documentType: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    addressOptional: DataTypes.STRING,
    issueDate: DataTypes.DATE,
    expirationDate: DataTypes.DATE,
    countryOfIssue: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserIdentity',
  });
  return UserIdentity;
};