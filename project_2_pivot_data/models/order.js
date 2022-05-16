
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    ID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    Firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Lastname: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Email Already Used"
      }
    },
    Item: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Total_Price: {
      type: DataTypes.NUMERIC(32, 2),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Order',
    freezeTableName: true,
  });
  return Order;
};