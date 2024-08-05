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
      UserIdentity.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  UserIdentity.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    nationality: {
      type: DataTypes.STRING
    },
    documentNumber: {
      type: DataTypes.STRING
    },
    documentType: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    postalCode: {
      type: DataTypes.STRING
    },
    street: {
      type: DataTypes.STRING
    },
    number: {
      type: DataTypes.STRING
    },
    addressOptional: {
      type: DataTypes.STRING
    },
    issueDate: {
      type: DataTypes.DATE
    },
    expirationDate: {
      type: DataTypes.DATE
    },
    countryOfIssue: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'UserIdentity',
  });
  return UserIdentity;
};