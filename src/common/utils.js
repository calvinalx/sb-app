export const renameProperty = (obj, fromKey, toKey) => {
  obj[toKey] = obj[fromKey]
  delete obj[fromKey]
}
