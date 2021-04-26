import Helper from '@ember/component/helper';

export default Helper.extend({
  compute([condition, truthyValue, falsyValue]) {
    return condition ? truthyValue : falsyValue;
  },
});
