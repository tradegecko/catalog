import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HomeController extends Controller {
  @tracked channels;
  @tracked filters;

  @service store;

  queryParams = ['channel_id', 'filter_id']

  constructor(){
    super(...arguments);
    this.channels =this.store.findAll('channel');
    this.filters =this.store.query('filterTab', {page: 'variants'});
    this.templates =this.store.findAll('template');
  }

  async fetchChannel() {
    if (this.channel_id) {
      let channels = await this.store.query('channel', {
        ids: [this.channel_id],
      });
    }
  }

  @action
  createTemplate(){

  }
}
