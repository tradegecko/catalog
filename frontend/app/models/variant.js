import DS from 'ember-data';
import { isBlank } from '@ember/utils';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';

const { Model, attr, hasMany, belongsTo } = DS;

export default Model.extend({
  product:        belongsTo(),
  images:         hasMany(),
  sku:            attr(),
  name:           attr(),
  upc:            attr(),
  locations:      attr(),
  composite:      attr(),
  stockBatchable: attr('boolean', { readOnly: true }),

  primaryImage: readOnly('images.firstObject'),

  productName: attr(),
  productType: attr(),
  opt1:        attr(),
  opt2:        attr(),
  opt3:        attr(),
  opts: computed(function() {
    return [this.get('opt1'), this.get('opt2'), this.get('opt3')].reject(isBlank).join(' - ');
  }),
  batches: hasMany('batch'),
});
