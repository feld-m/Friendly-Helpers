'use strict';

module.exports = function (settings, event) {
  try {
    settings.callback.apply(event.element || this, [event, event.target]);
    return true;
  } catch (e) {
    turbine.logger.error('Error running synchronous code event', settings, event, '\n', e);
    return false;
  }
};
