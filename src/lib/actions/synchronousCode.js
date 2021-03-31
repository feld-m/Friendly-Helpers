'use strict';

module.exports = function (settings, event) {
  try {
    // return callback result (if any) in case a promise is returned by user defined custom code
    // see: https://experienceleaguecommunities.adobe.com/t5/adobe-experience-platform-launch/rule-component-sequencing/ba-p/362099
    return settings.callback.apply(event.element || this, [event, event.target]); 
  } catch (e) {
    turbine.logger.error('Error running synchronous code event', settings, event, '\n', e);
    return false;
  }
};
