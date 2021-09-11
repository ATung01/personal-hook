import React from 'react'
import Shape from './shape'
import addKeys from './addKeys'
import styled from 'styled-components'
import countBlockSize from './countBlockSize'

const smallBlock = {row: "span 2", column: "span 2", bgColor: "white"}

function FillEmptySpace({ numRows, numColumns, layout, setFill}) {
  let newLayout = []
  let NewShape = <Shape {...smallBlock}/>
  const LayoutArea = numColumns * numRows
  let remainingSpace = LayoutArea
  setFill([])
  
  layout.forEach(el => {
    console.log(remainingSpace)
    remainingSpace -= countBlockSize(el)
    // let col = JSON.stringify(el.props.column).match(/[0-9]/g).join("")
    // let row = JSON.stringify(el.props.row).match(/[0-9]/g).join("")
    // hoops jumped through due to Footer having a dynamic size instead of being initialized
    // remainingSpace -= (col * row)
  })
  while (remainingSpace >= 5) {
    newLayout.push(NewShape)
    remainingSpace -= 4
    // console.log(remainingSpace)
  }
  // newLayout.push(NewShape, NewShape)
  newLayout = addKeys(newLayout)
  console.log(newLayout)
  setFill(newLayout)
  
}

export default FillEmptySpace
