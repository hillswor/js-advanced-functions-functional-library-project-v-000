const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      Object.values(collection).forEach(e => callback(e))
      return collection
    },

    map: function(collection, callback) {
      return Object.values(collection).map(callback);
    },

    reduce: function(collection, callback, acc) {
      if (acc === undefined) {
        return collection.reduce(callback)
      } else {
        return collection.reduce(callback, acc)
      }
    },

    find: function(collection, predicate) {
      return collection.find(predicate)
    },

    filter: function(collection, predicate) {
      return collection.filter(predicate)
    },

    size: function(collection) {
      return Object.values(collection).length
    },

    first: function(array, n) {
      if (n === undefined) {
        return array[0]
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n) {
      if (n === undefined) {
        return array[array.length - 1]
      } else {
        return array.slice(array.length - n, array.length)
      }
    },

    compact: function(array) {
      return array.filter(x=>x)
    },

    sortBy: function(array, callback) {
      return array.slice().sort(callback)
    },

    flatten: function(array, shallow) {
      if (shallow === true) {
        return array.slice().flat()
      } else {
        const depth = array.length
        return array.slice().flat(depth)
      }
    },

    uniq: function(array, isSorted, callback) {
      return [...new Set(array)]
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
