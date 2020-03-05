'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('addresses', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        street: {
          type: Sequelize.STRING,
          allowNull: false,
        }, 
        number: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        complement: {
          type: Sequelize.STRING,
        },
        neighborhood: {
          type: Sequelize.STRING,
        },
        city: {
          type: Sequelize.STRING,
        },
        country: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: 'Brasil',
        }, 
        zipcode: {
          type: Sequelize.STRING,
        }, 
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }, 
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('addresses');
  }
};
