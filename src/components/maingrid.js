import React, { useState } from 'react'
import styled from 'styled-components'

import Shape from './shape'


const Main = styled.div`
box-sizing: border-box;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
grid-auto-columns: minmax(80px, auto);
grid-auto-rows: minmax(80px, auto);
${'' /* column-gap: 5px; */}
${'' /* row-gap: 5px; */}
grid-auto-flow:  dense;
`
const Square2x2 = { rowSize: "span 2", columnSize: "span 2", bgColor: "red"}
const Square4x4 = { rowSize: "span 4", columnSize: "span 4", bgColor: "green"}
const FlatLine = { rowSize: "span 8", columnSize: "span 2", bgColor: "purple"}
const VertLine = { rowSize: "span 2", columnSize: "span 8", bgColor: "blue"}


function maingrid() {

    return (
        <Main>
        <Shape {...Square2x2}/>
        <Shape {...VertLine}/>
        <Shape {...Square4x4}/>
        <Shape {...FlatLine}/>
        <Shape {...Square4x4}/>
        <Shape {...Square2x2}/>
        <Shape {...FlatLine}/>
        <Shape {...VertLine}/>
        <Shape {...Square2x2}/>
        </Main>
    )    
}

export default maingrid