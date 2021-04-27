import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import { computed } from '@ember/object';


export default class ImageModel extends Model {
  @belongsTo() variant;

  @attr('string') position;
  @attr('string') basePath;
  @attr('string') fileName;

  @computed('basePath', 'fileName')
  get imageURL() {
    if(this.get('basePath') && this.get('fileName')) {
      return `${this.get('basePath')}/${this.get('fileName')}`;
    }
    return '';
  }
}

