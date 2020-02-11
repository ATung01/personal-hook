import React from 'react'

function addKeys(layout) {
    let newLayout = layout.map( (shape, key) => {
        return React.cloneElement(shape, {key})
    })
    return newLayout
}

export default addKeys
