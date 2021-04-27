import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class HomeController extends Controller {
  @service store;
  queryParams = ['channel_id']

  async fetchChannel() {
    if (this.channel_id) {
      let channels = await this.store.query('channel', {
        ids: [this.channel_id],
      });
      this.set('channel', channels.firstObject);
    }
  }
}
