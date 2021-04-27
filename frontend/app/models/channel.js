import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default class ChannelModel extends Model {
  @attr('string') priceListId;
}
