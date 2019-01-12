function map(arr, mapFn) {
  const result = [];
  for (let i = 1; i < arr.length; i++) {
    const mappedValue = mapFn(arr[i], i, arr);
    result.push(mappedValue);
  }
  return result;
}

// eslint-disable-next-line no-extend-native
Array.prototype.map = function(mapFn) {
  return map(this, mapFn);
};
