import { filter } from '@ember/object/computed';
import { get, computed } from '@ember/object';

export function boundEqual(first, second) {
  return computed(first, second, function(/* key, value */) {
    return get(this, first) === get(this, second);
  });
}

export function rejectBy(dependentKey, propertyKey, value) {
  let callback;
  if (arguments.length === 2) {
    callback = function(item) {
      return !get(item, propertyKey);
    };
  } else {
    callback = function(item) {
      return get(item, propertyKey) !== value;
    };
  }
  return filter(`${dependentKey}.@each.${propertyKey}`, callback);
}

export function ternary(property, firstValue, secondValue) {
  return computed(property, function() {
    return get(this, property) ? firstValue : secondValue;
  });
}
