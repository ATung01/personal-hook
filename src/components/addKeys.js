import React from 'react'

function addKeys(layouts, existing) {
  let keyCount = 0 + existing.length
  let newLayouts = layouts.map((shape, key) => {

    if (!shape.key) {
      keyCount++
      return React.cloneElement(shape, { key: keyCount }) 
    }
    else
      keyCount++
      return shape
  })
  return newLayouts
}

export default addKeys
