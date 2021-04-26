/* globals Raven */
import Ember from 'ember';
import Service, { inject as injectService } from '@ember/service';

export default Service.extend({
  session: injectService(),
  
  registerAccountData() {
    if (Ember.testing) { return ; }
    this.get('session.currentUser').then((user) => {
      Raven.setUserContext({
        accountID: user.get('accountID'),
        loginID: user.get('loginID')
      });
    });
  },
  captureException(error, ravenProperties = {}) {
    if (Raven.isSetup()) {
      Raven.captureMessage(error, ravenProperties);
    }
  },
});
