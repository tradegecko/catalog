import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HomeController extends Controller {
  @tracked channels;
  @tracked filters;
  @tracked templates;
  @tracked template_id;
  @tracked q;
  @tracked searchTerm;

  @service store;

  queryParams = ['channel_id', 'filter_id', 'q']

  constructor(){
    super(...arguments);
    this.channels =this.store.findAll('channel');
    this.filters =this.store.query('filterTab', {page: 'variants'});
    this.templates =this.store.findAll('template');
    // The select box doesn't trigger the mut when loading the default option
    this.templates.then((result) => {
      this.template_id = result.firstObject.id
    })
  }

  @action
  createTemplate(){

  }

  @action
  search(){
    this.q = this.searchTerm;
  }
}
