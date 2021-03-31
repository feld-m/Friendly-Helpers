'use strict';

module.exports = function (settings, event) {
  try {
    settings.callback(event);
  } catch (e) {
    turbine.logger.error('Error running synchronous code event', settings, event, '\n', e);
  }
};
