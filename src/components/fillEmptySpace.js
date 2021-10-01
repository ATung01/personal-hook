import React from 'react'
import Shape from './shape'
import addKeys from './addKeys'
import styled from 'styled-components'
import countBlockSize from './countBlockSize'

const smallBlock = {row: "span 2", column: "span 2", bgColor: "white", className: "filler"}

function FillEmptySpace({ numRows, numColumns, layout, setFill, profileSize}) {
  let newLayout = []
  console.log("newLayout before =", newLayout)
  let NewShape = <Shape {...smallBlock}/>
  const LayoutArea = numColumns * numRows
  console.log("LayoutArea =", LayoutArea, "numRows =", numRows, "numColumns =", numColumns)
  let remainingSpace = LayoutArea
  
  layout.forEach(el => {
    remainingSpace -= countBlockSize(el)
    console.log(remainingSpace, "key =", el.key)
    // let col = JSON.stringify(el.props.column).match(/[0-9]/g).join("")
    // let row = JSON.stringify(el.props.row).match(/[0-9]/g).join("")
    // hoops jumped through due to Footer having a dynamic size instead of being initialized
    // remainingSpace -= (col * row)
  })
  while (remainingSpace >= 4) {
    // console.log("remainingSpace = ", remainingSpace)
    newLayout.push(NewShape)
    remainingSpace -= 4
    // console.log("newLayout during =", newLayout)
  }
  // newLayout.push(NewShape, NewShape)
  newLayout = addKeys(newLayout)
  console.log("newLayout after =", newLayout)
  setFill(newLayout)
  
}

export default FillEmptySpace
