import React, { useRef } from 'react'

function addKeys(layouts, existing) {
  let keyCount = 0 + existing.length
  let newLayouts = layouts.map((shape, key) => {

    if (!shape.key) {
      keyCount++
      let newShape = React.cloneElement(shape, { key: keyCount })
      return newShape
    }
    else
      keyCount++
      return shape
  })
  return newLayouts
}

export default addKeys
