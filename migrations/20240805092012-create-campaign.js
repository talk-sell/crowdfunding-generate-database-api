'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Campaigns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Projects', // assuming you have a Projects table
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      videoUrl: {
        type: Sequelize.STRING
      },
      fundingStartDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      fundingEndDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      min_investment: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      min_funding: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      max_funding: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      numberOfInvestors: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      interestRate: {
        type: Sequelize.DECIMAL(5, 2)
      },
      fundingProgress: {
        type: Sequelize.DECIMAL(5, 2),
        defaultValue: 0.0
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Campaigns');
  }
};