import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  loginID: attr('string'),
  accountID: attr('string')
});
