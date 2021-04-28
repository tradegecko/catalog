import Route from '@ember/routing/route';
import { isEmpty } from '@ember/utils';

export default class HomeRoute extends Route {
  queryParams = {
    channel_id: {
      refreshModel: true
    },
    filter_id: {
      refreshModel: true
    },
  };

  async model(params) {
    // rails-ember-cli bug http://localhost:3001/?channel_id=5/
    return this.store.query('variant', {
      channel_id: (params.channel_id || '').replace('/',''),
      filter_id: (params.filter_id || '').replace('/','')
    });
  }

  setupController(controller, model) {
    super.setupController(...arguments);
    controller.fetchChannel();
  }
}
