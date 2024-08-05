import { QueryInterface, DataTypes } from 'sequelize';

export = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('campaign_galleries', {
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
      imageUrl: {
        type: DataTypes.STRING,
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
    await queryInterface.dropTable('campaign_galleries');
  },
};
