import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default class FilterTab extends Model {
  @attr('string') name;
}
