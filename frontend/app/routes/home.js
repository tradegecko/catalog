import Route from '@ember/routing/route';
import { isEmpty } from '@ember/utils';

export default class HomeRoute extends Route {
  queryParams = {
    channel_id: {
      refreshModel: true
    }
  };

  async model(params) {
    let channelReferences = await this.store.query('channel-reference', {
      channel_id: params.channel_id,
      owner_type: 'Variant',
      limit: 250,
    });
    let variantIds = channelReferences.mapBy('ownerId');
    if (isEmpty(variantIds)) {
      return [];
    } else {
      return this.store.query('variant', { ids: variantIds, limit: 250 });
    }
  }

  setupController(controller, model) {
    super.setupController(...arguments);
    controller.fetchChannel();
  }
}
