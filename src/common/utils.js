export const renameProperty = (obj, fromKey, toKey) => {
  obj[toKey] = obj[fromKey]
  delete obj[fromKey]
}

export const loadFallbackImage = (e) => {
  e.target.src = "/poster.svg"
}
