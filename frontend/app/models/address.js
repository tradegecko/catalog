import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  label: attr(),
  company: attr(),
  firstName: attr(),
  lastName: attr(),
  address1: attr(),
  address2: attr(),
  suburb: attr(),
  city: attr(),
  state: attr(),
  country: attr(),
  zipCode: attr(),
});
