'use strict';

var Promise = require('@adobe/reactor-promise');

module.exports = function (settings, event) {
  try {
    // return callback result (if any) in case a promise is returned by user defined custom code
    // see: https://experienceleaguecommunities.adobe.com/t5/adobe-experience-platform-launch/rule-component-sequencing/ba-p/362099
    return settings.callback.call(event.element, event, event.target, Promise);
  } catch (e) {
    turbine.logger.error('Failed to run "Synchronous Code" for "' + event.$rule + '" rule.\nEvent:', event, '\nError:', e);
    return false;
  }
};
