import DS from 'ember-data';
import { computed } from '@ember/object';
const { Model, attr, belongsTo } = DS;

export default Model.extend({
  variant: belongsTo(),
  position: attr(),
  basePath: attr(),
  fileName: attr(),
  thumbnailURL: computed('basePath', 'fileName', function() {
    if(this.get('basePath') && this.get('fileName')) {
      return `${this.get('basePath')}/thumbnail_${this.get('fileName')}`;
    }
    return '';
  })
});
