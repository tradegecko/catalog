import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default class ChannelReferenceModel extends Model {
  @attr('string') ownerType;
  @attr('number') ownerId;
}
