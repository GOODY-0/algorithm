function removeProperty(obj, prop) {
  if(obj[prop] === undefined) return false;
  else {
    delete obj[prop]
    return true
  }
}
