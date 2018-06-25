'use strict'

class Hashmap {
  this.size = size;
  this.map = new Array(size);
}
hash(key) {
  return key.split('').reduce((p,n) => p + n.charCodeAt(0), 0) % this.size;
}

set(key, value) {
  let hash = this.hash(key);
  console.log(hash, key, value);

  if(!this.map[hash]) {this.map[hash] = [];}

  this.map[hash].push({[key]:value});

  get(key)

  delete(key)

  update(key, newValue)

  seralize()

  deseralize()
}