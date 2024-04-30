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
        date: DataTypes.STRING,
        location: DataTypes.STRING,
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: DataTypes.STRING,
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