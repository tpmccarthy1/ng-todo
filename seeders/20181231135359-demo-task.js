'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Task', [{
      description: 'Test task',
      complete: false,
      dueDate: '2019-07-07',
      isOverdue: false
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Task', null, {});
  }
};
