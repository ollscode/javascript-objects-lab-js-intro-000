

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, { [key]: value });
}

// function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
//   obj[key] = value
//   return obj
// }

