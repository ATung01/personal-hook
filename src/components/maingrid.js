import React, { useRef } from 'react'
import styled from 'styled-components'
import Shape from './shape'
import Profile from './profile'
import CountRows from './countRows'


const Main = styled.div`
box-sizing: border-box;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
grid-auto-rows: minmax(80px, auto);
${'' /* column-gap: 5px; */}
${'' /* row-gap: 5px; */}
grid-auto-flow:  dense;
border-top: 3px solid black;
border-left: 3px solid black;
background-color: black;

`
const Square2x2 = { row: "span 2", column: "span 2", bgColor: "red"}
const Square4x4 = { row: "span 4", column: "span 4", bgColor: "green"}
const Square8x8 = { row: "span 8", column: "span 8", bgColor: "yellow"}
const FlatLine = { row: "span 2", column: "span 8", bgColor: "purple"}
const VertLine = { row: "span 8", column: "span 2", bgColor: "blue"}

let layoutList = [
    <Shape {...Square2x2} />,
    <Shape {...Square4x4} />,
    <Profile {...Square4x4}/>,
    <Shape {...FlatLine} />,
    <Shape {...Square2x2} />,
    <Shape {...VertLine} />,
    <Shape {...Square4x4} />,
    <Shape {...Square2x2} />
]

function Maingrid() {
    const gridRef = useRef(null)
    layoutList = layoutList.map( (shape, index) => {
        return React.cloneElement(shape, {key: index})
    }) // adds key
    
    return (
        <Main ref={gridRef}>
            {layoutList}
            <CountRows gridComputedStyles = {gridRef}></CountRows>
        </Main>
    )    
}

export default Maingrid