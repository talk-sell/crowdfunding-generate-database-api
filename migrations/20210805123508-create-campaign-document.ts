import { QueryInterface, DataTypes } from 'sequelize';

export = {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.createTable('campaign_documents', {
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
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            file: {
                type: DataTypes.BLOB, // Use BLOB for storing binary files
                allowNull: false,
            },
            approved: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            message: {
                type: DataTypes.TEXT,
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
        await queryInterface.dropTable('campaign_documents');
    },
};
