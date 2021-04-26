export function flatten(array) {
  return array.reduce(function(a, b) {
    return a.toArray().concat(b.toArray());
  });
}
