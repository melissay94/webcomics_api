'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      creatorName: {
        type: Sequelize.STRING
      },
      comicUrl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      supportUrl: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      updated: {
        type: Sequelize.STRING
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },
      isFree: {
        type: Sequelize.BOOLEAN
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comics');
  }
};