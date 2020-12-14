import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Shape from './shape'
import Profile from './profile'
import CountGridSize from './countGridSize'
import FillEmptySpace from './fillEmptySpace'
import AddKeys from './addKeys'

const Main = styled.div`
box-sizing: border-box;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
grid-auto-columns: minmax(80px, 1fr);
grid-auto-rows: minmax(80px, 1fr);
grid-auto-flow: dense;
border: 1px solid black;
background-color: black;
`

const Square2x2 = { row: "span 2", column: "span 2", bgColor: "red" }
const Square4x4 = { row: "span 4", column: "span 4", bgColor: "green" }
const Square8x8 = { row: "span 8", column: "span 8", bgColor: "yellow" }
const VertLine = { row: "span 8", column: "span 2", bgColor: "blue" }

const layoutList = [
  <Shape {...Square2x2} />,
  <Shape {...Square4x4} />,
  <Profile {...Square8x8} />,
  <Shape {...Square2x2} />,
  <Shape {...VertLine} />,
  <Shape {...Square4x4} />,
  <Shape {...Square2x2} />
]

let initialLayout = AddKeys(layoutList)

function Maingrid() {
  const [layout, setLayout] = useState(initialLayout)
  const [numRows, setNumRows] = useState()
  const [numColumns, setNumColumns] = useState()
  const gridRef = useRef(null)
  let gridCount = () => {
    CountGridSize({
      gridComputedStyles:gridRef,
      setNumRows:setNumRows,
      numRows:numRows,
      setNumColumns:setNumColumns,
      numColumns:numColumns
    })
  }
  useEffect(() => {
    console.log("Useeffect initial hit")
    window.addEventListener("resize", gridCount)
  })



  return (
    <Main ref={gridRef}>
      {layout}
      {/* <FillEmptySpace
        numRows={numRows}
        // oldNumRows={oldNumRows}
        layout={layout}
        setLayout={setLayout}>
      </FillEmptySpace> */}
    </Main>
  )
}

export default Maingrid