/* globals moment */
import Helper from '@ember/component/helper';

export default Helper.extend({
  compute(params) {
    let variant = params[0];
    let priceListId = params[1];
    if (priceListId) {
      let priceHash = variant.variantPrices.findBy('price_list_id', priceListId)
      if (priceHash) {
        return priceHash.value;
      }
    }
  },
});
