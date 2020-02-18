import React from 'react'

function addKeys(layouts) {
  let newLayouts = layouts.map((shape, key) => {
    return React.cloneElement(shape, { key })
  })
  return newLayouts
}

export default addKeys
