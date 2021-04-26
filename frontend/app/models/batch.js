import DS from 'ember-data';
import { inject as injectService } from '@ember/service';
import { computed } from '@ember/object';
import { readOnly, reads } from '@ember/object/computed';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  batchName:   attr('string'),
  expiredAt:   attr('date'),
  locations:   attr({ defaultValue: [], readOnly: true }),
  status:      attr('string', { readOnly: true }),
  stockOnHand: attr('number', { readOnly: true }),
  createdAt:   attr('date', { readOnly: true }),
  variant:     belongsTo('variant', { readOnly: true }),
  updatedAt:   attr('date', { readOnly: true }),

  stockLocation:     injectService(),
  variantName:       readOnly('variant.name'),
  productName:       readOnly('variant.product.name'),
  sku:               readOnly('variant.sku'),
  activeLocation:    reads('stockLocation.currentLocation'),

  activeStockOnHand: computed('activeLocation', 'locations.@each.stock_on_hand', function() {
    const { stock_on_hand } = this.stockInLocation(this.get('activeLocation')) || {};
    return stock_on_hand || 0;
  }),

  stockInLocation(location) {
    if (location) {
      return this.get('locations').find((batchLocation) => batchLocation.location_id === +location.get('id'));
    }
  },
});
