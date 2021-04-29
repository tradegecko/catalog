import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';
import { readOnly } from '@ember/object/computed';


export default class VariantModel extends Model {
  @belongsTo() product;
  @hasMany() images;

  @attr('string') sku;
  @attr('string') name;
  @attr('string') productName;
  @attr('string') sellPrice;
  @attr('string') wholesalePrice;
  @attr() variantPrices;

  @readOnly('images.firstObject') primaryImage;
}
