import React, { useEffect } from 'react'
import Shape from './shape'
import addKeys from './addKeys'
import styled from 'styled-components'

let DummyShape = styled(Shape)`
grid-row-end: 'span 2';
grid-column-end: 'span 2';
background-color: 'white';
border-right: 3px solid black;
border-bottom: 3px solid black;
`



function FillEmptySpace({ numRows, oldNumRows, layout, setLayout }) {
  let newLayout = layout
  const newShape = <DummyShape key={newLayout.length} />
  // newLayout.push(newShape)
  addKeys(newLayout)
  // useEffect( () => {
  //     console.log(oldNumRows)
  //     setLayout(newLayout)
  // })
  if (layout.length < 20) {
    setLayout([...layout, newShape])
  }


  return null
}

export default FillEmptySpace
