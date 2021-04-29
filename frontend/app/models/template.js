import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default class Template extends Model {
  @attr('string') name;
  @attr('string') url;
}
