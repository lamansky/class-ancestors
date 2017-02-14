'use strict'

const getClassChain = require('class-chain')

function getClassAncestors (cls) {
  if (typeof cls !== 'function') return []
  return getClassChain(Object.getPrototypeOf(cls))
}

getClassAncestors.names = function (cls) {
  return getClassAncestors(cls).map(ancestor => ancestor.name)
}

module.exports = getClassAncestors
