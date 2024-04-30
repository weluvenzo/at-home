'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Event extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Event.init({
        name: DataTypes.STRING,
        date: DataTypes.DATE,
        location: DataTypes.STRING,
        description: DataTypes.STRING,
        zipcode: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Event',
        timestamps: false,
        tableName: 'Events'
    });
    return Event;
};