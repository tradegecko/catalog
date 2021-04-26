/* globals moment */
import Helper from '@ember/component/helper';

export default Helper.extend({
  compute(params, hash) {
    return moment(params[0]).format(hash.format);
  },
});
