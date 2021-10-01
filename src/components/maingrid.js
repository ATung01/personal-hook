import React, { useState, useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import Shape from './shape'
import Profile from './profile'
import CountGridSize from './countGridSize'
import FillEmptySpace from './fillEmptySpace'
import Footer from './footer'
import addKeys from './addKeys'
import { debounce } from 'lodash'

const Main = styled.div`
box-sizing: border-box;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
grid-template-rows: repeat(16, minmax(80px, 1fr));
${'' /* grid-auto-columns: minmax(80px, 1fr); */}
${'' /* grid-auto-rows: minmax(80px, 1fr); */}
grid-auto-flow: dense;
border: 1px solid black;
background-color: black;
`

const Square2x2 = { row: "span 2", column: "span 2", bgColor: "red" }
const Square4x4 = { row: "span 4", column: "span 4", bgColor: "green" }
const Square8x8 = { row: "span 8", column: "span 8", bgColor: "yellow" }
const VertLine = { row: "span 8", column: "span 2", bgColor: "blue" }
const FooterSize = { row: "span 2"}

function Maingrid() {
  const [numRows, setNumRows] = useState()
  const [numColumns, setNumColumns] = useState()
  const [fill, setFill] = useState()
  const [profileSize, setProfileSize] = useState()
  const layoutList = [
    <Shape {...Square2x2} />,
    <Shape {...Square4x4} />,
    <Profile {...Square8x8} numColumns={numColumns} className="profile" />,
    <Shape {...Square2x2} />,
    <Shape {...VertLine} />,
    <Shape {...Square4x4} />,
    <Shape {...Square2x2} />
    // <Footer {...FooterSize} column={numColumns} />
  ]

  const initialLayout = addKeys(layoutList)
  const gridRef = useRef(null)

  let fillSpace = () => {
    FillEmptySpace({
      numRows: numRows,
      numColumns: numColumns,
      setFill: setFill,
      layout: initialLayout
    })
  }
  // let gridCount = () => {
  //   CountGridSize({
  //     gridComputedStyles: gridRef,
  //     setNumRows: setNumRows,
  //     numRows: numRows,
  //     setNumColumns: setNumColumns,
  //     numColumns: numColumns,
  //     setFill: setFill,
  //     fillSpace: fillSpace
  //   })
  // }
  let gridCount = debounce(() => {
    CountGridSize({
      gridComputedStyles: gridRef,
      setNumRows: setNumRows,
      numRows: numRows,
      setNumColumns: setNumColumns,
      numColumns: numColumns,
      setFill: setFill,
      fillSpace: fillSpace
    })
  }, 100)
  useLayoutEffect(() => {
    gridCount()
    fillSpace()
    console.log("Useeffect initial hit")
    console.log("numColumns = ", numColumns)
    console.log('numRows = ', numRows)
    window.addEventListener("resize", gridCount, {passive: true})
    return () => {
     window.removeEventListener("resize", gridCount, {passive: true})
    }
  }, [numColumns])

  return (
    <Main ref={gridRef} className="Main">
      {initialLayout}
      {/* <FillEmptySpace
        numRows={numRows}
        fill={fill}
        setFill={setFill}
        layout={initialLayout}>
      </FillEmptySpace> */}
      {fill}
    </Main>
  )
}

export default Maingrid