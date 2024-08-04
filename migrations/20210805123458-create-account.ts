import { QueryInterface, DataTypes } from 'sequelize';

export = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('accounts', {
      account_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      account_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      legal_entity_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postal_code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      your_reference: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      state_or_province: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      spread_table: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      api_trading: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      online_trading: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      phone_trading: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      identification_type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      identification_value: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      terms_and_conditions_accepted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('accounts');
  },
};
