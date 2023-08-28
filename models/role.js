const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class role extends Model {}

role.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      password: {
        //do i need other inputs from the table? ids?
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      timestamps: false,
      underscored: true,
      modelName: 'role',
    }
  );
  
  module.exports = role;