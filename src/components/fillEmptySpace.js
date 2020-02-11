import React, { useState, useEffect } from 'react'
import Shape from './shape'
import addKeys from './addKeys'



function FillEmptySpace(props) {
    let newLayout = props.layout
    const newShape = <Shape key={newLayout.length}/>
    newLayout.push(newShape)
    addKeys(newLayout)
    console.log(props)
    useEffect( () => {
        
    })

    return <div></div>
}

export default FillEmptySpace