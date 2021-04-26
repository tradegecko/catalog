import Service, { inject as injectService } from '@ember/service';

export default Service.extend({
  segment: injectService(),

  trackEvent(event, extraProperties) {
    this.get('segment').trackEvent(event, Object.assign({ timestamp: Date.now() }, extraProperties));
  },
});
