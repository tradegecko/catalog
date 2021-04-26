import Service, { inject as injectService } from '@ember/service';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';

export default Service.extend({
  store:   injectService(),
  account: readOnly('currentUser.account'),

  currentUser: computed(function() {
    return this.get('store').find('user', 'current');
  }),
});
