import React from 'react'

function addKeys(layouts) {
  let newLayouts = layouts.map((shape, key) => {
    if (!shape.key) {
      return React.cloneElement(shape, { key }) 
    }
    else
      return shape
  })
  return newLayouts
}

export default addKeys
