import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import styled from 'styled-components'
import Shape from './shape'
import Profile from './profile'
import CountGridSize from './countGridSize'
import FillEmptySpace from './fillEmptySpace'
import AddKeys from './addKeys'
import Footer from './footer'
import addKeys from './addKeys'

const Main = styled.div`
box-sizing: border-box;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
grid-template-rows: repeat(16, minmax(80px, 1fr));
grid-auto-columns: minmax(80px, 1fr);
${'' /* grid-auto-rows: minmax(80px, 1fr); */}
grid-auto-flow: dense;
border: 1px solid black;
background-color: black;
`

const Square2x2 = { row: "span 2", column: "span 2", bgColor: "red" }
const Square4x4 = { row: "span 4", column: "span 4", bgColor: "green" }
const Square8x8 = { row: "span 8", column: "span 8", bgColor: "yellow" }
const VertLine = { row: "span 8", column: "span 2", bgColor: "blue" }

function Maingrid() {
  const [numRows, setNumRows] = useState(10)
  const [numColumns, setNumColumns] = useState(10)
  const [fill, setFill] = useState()

  const layoutList = [
    <Shape {...Square2x2} />,
    <Shape {...Square4x4} />,
    <Profile {...Square8x8} numColumns={numColumns} />,
    <Shape {...Square2x2} />,
    <Shape {...VertLine} />,
    <Shape {...Square4x4} />,
    <Shape {...Square2x2} />,
    <Footer numRows={numRows} numColumns={numColumns} />
  ]

  const initialLayout = addKeys(layoutList)

  const gridRef = useRef(null)
  let gridCount = () => {
    CountGridSize({
      gridComputedStyles: gridRef,
      setNumRows: setNumRows,
      numRows: numRows,
      setNumColumns: setNumColumns,
      numColumns: numColumns
    })
  }
  useEffect(() => {
    // window.removeEventListener("resize", gridCount)
    gridCount()
    // FillEmptySpace({
    //   numRows: numRows,
    //   fill: fill,
    //   setFill: setFill,
    //   layout: initialLayout
    // })
    console.log("Useeffect initial hit")
    console.log("numColumns = ", numColumns)
    window.addEventListener("resize", gridCount)
  }, [numColumns])

  return (
    <Main ref={gridRef}>
      {initialLayout}
      {/* <FillEmptySpace
        numRows={numRows}
        fill={fill}
        setFill={setFill}
        layout={initialLayout}>
      </FillEmptySpace> */}
      {/* {fill} */}
    </Main>
  )
}

export default Maingrid