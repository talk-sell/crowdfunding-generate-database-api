import { QueryInterface, DataTypes } from 'sequelize';

export = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('campaigns', {
      campaign_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      projectId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'projects',
          key: 'project_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      videoUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fundingStartDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      fundingEndDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      min_investment: {
        type: DataTypes.DECIMAL(20, 2),
        allowNull: false,
      },
      min_funding: {
        type: DataTypes.DECIMAL(20, 2),
        allowNull: false,
      },
      max_funding: {
        type: DataTypes.DECIMAL(20, 2),
        allowNull: false,
      },
      numberOfInvestors: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      interestRate: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: 0.00,
      },
      fundingProgress: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: 0.00,
      },
      status: {
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
    await queryInterface.dropTable('campaigns');
  },
};
