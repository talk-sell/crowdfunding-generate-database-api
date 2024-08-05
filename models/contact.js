'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contact.belongsTo(models.Account, { foreignKey: 'account_id' });
    }
  }
  Contact.init({
    login_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Accounts',
        key: 'id'
      }
    },
    account_name: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
    locale: {
      type: DataTypes.STRING
    },
    timezone: {
      type: DataTypes.STRING
    },
    email_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mobile_phone_number: {
      type: DataTypes.STRING
    },
    phone_number: {
      type: DataTypes.STRING
    },
    your_reference: {
      type: DataTypes.STRING
    },
    date_of_birth: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};