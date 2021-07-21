import React from 'react'
import Shape from './shape'
import addKeys from './addKeys'
import styled from 'styled-components'

const DummyShape = styled(Shape)`
grid-row-end: 'span 2';
grid-column-end: 'span 2';
background-color: 'white';
`

function FillEmptySpace({ numRows, numColumns, layout, setFill}) {
  let newLayout = []
  let NewShape = <DummyShape/>
  const LayoutArea = numColumns * numRows
  let remainingSpace = LayoutArea
  
  newLayout.push(NewShape, NewShape)
  newLayout = addKeys(newLayout)
  setFill(newLayout)
  layout.forEach(el => {
    let col = JSON.stringify(el.props.column).match(/[0-9]/g).join("")
    let row = JSON.stringify(el.props.row).match(/[0-9]/g).join("")
    // hoops jumped through due to Footer having a dynamic size instead of being initialized
    let section = col * row
    console.log(section)
    console.log(LayoutArea)
  });
}

export default FillEmptySpace
