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
    }
  }
  Contact.init({
    login_id: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    account_id: DataTypes.INTEGER,
    account_name: DataTypes.STRING,
    status: DataTypes.STRING,
    locale: DataTypes.STRING,
    timezone: DataTypes.STRING,
    email_address: DataTypes.STRING,
    mobile_phone_number: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    your_reference: DataTypes.STRING,
    date_of_birth: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};