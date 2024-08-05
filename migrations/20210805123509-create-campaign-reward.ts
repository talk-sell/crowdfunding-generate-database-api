import { QueryInterface, DataTypes } from 'sequelize';

export = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('campaign_rewards', {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      campaignId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'campaigns',
          key: 'campaign_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      tierName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      minimumInvestment: {
        type: DataTypes.DECIMAL(20, 2),
        allowNull: false,
      },
      perks: {
        type: DataTypes.TEXT,
        allowNull: false,
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
    await queryInterface.dropTable('campaign_rewards');
  },
};
