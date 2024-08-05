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
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      videoUrl: {
        type: Sequelize.STRING
      },
      fundingStartDate: {
        type: Sequelize.DATE
      },
      fundingEndDate: {
        type: Sequelize.DATE
      },
      min_investment: {
        type: Sequelize.DECIMAL
      },
      min_funding: {
        type: Sequelize.DECIMAL
      },
      max_funding: {
        type: Sequelize.DECIMAL
      },
      numberOfInvestors: {
        type: Sequelize.INTEGER
      },
      interestRate: {
        type: Sequelize.DECIMAL
      },
      fundingProgress: {
        type: Sequelize.DECIMAL
      },
      status: {
        type: Sequelize.STRING
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