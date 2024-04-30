'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CompanyInfo.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    zipcode: DataTypes.INTEGER,
    category: DataTypes.STRING,
    hours: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CompanyInfo',
    timestamps: false,
    tableName: 'CompanyInfo'
  });
  return CompanyInfo;
};