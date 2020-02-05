import React, { useState } from 'react'
import styled from 'styled-components'
import Shape from './shape'


const Main = styled.div`
box-sizing: border-box;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
grid-auto-rows: minmax(80px, auto);
${'' /* column-gap: 5px; */}
${'' /* row-gap: 5px; */}
grid-auto-flow:  dense;
`
const Square2x2 = { row: "span 2", column: "span 2", bgColor: "red"}
const Square4x4 = { row: "span 4", column: "span 4", bgColor: "green"}
const Square8x8 = { row: "span 8", column: "span 8", bgColor: "yellow"}
const FlatLine = { row: "span 2", column: "span 8", bgColor: "purple"}
const VertLine = { row: "span 8", column: "span 2", bgColor: "blue"}

{/* <Shape {...Square2x2}/>
<Shape {...VertLine}/>
<Shape {...Square4x4}/>
<Shape {...FlatLine}/> */}


function Maingrid() {

    return (
        <Main>
            <Shape {...Square2x2} />
            <Shape {...Square4x4} />
            <Shape {...FlatLine} />
            <Shape {...Square2x2} />
            <Shape {...VertLine} />
            <Shape {...Square4x4} />
            <Shape {...Square2x2} />
            <Shape {...Square8x8} />         
        </Main>
    )    
}

export default Maingrid