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
    q: {
      refreshModel: true
    }
  };

  async model(params) {
    return this.store.query('variant', {
      channel_id: params.channel_id,
      filter_id: params.filter_id,
      q: params.q,
    });
  }

  setupController(controller, model) {
    super.setupController(...arguments);
    controller.searchTerm = controller.q;
  }
}
