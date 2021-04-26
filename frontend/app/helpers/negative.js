import { helper } from '@ember/component/helper';

export function negative(value) {
  return value * -1;
}

export default helper(negative);
