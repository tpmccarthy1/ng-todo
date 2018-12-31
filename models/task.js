'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    description: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,
    dueDate: DataTypes.STRING,
    isOverdue: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Task;
};