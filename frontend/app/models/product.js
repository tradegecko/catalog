import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default Model.extend({
  variants: hasMany(),
  name: attr(),
  tags: attr(),
  stockBatchable: attr('boolean', { readOnly: true }),
});
