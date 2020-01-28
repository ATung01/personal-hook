import React, { useState } from 'react'
import styled from 'styled-components'
import Square2x2 from './square2x2'
import Square4x4 from './square4x4'
import VertLine from './vertline'
import FlatLine from './flatline'


const Main = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
grid-auto-rows: 80px;
${'' /* column-gap: 5px; */}
${'' /* row-gap: 5px; */}
grid-auto-flow: dense;
`

function maingrid() {

    return (
        <Main>
        <Square2x2></Square2x2>
        <FlatLine></FlatLine>
        <Square4x4></Square4x4>
        <Square2x2></Square2x2>
        <Square4x4></Square4x4>
        <FlatLine></FlatLine>
        <Square2x2></Square2x2>
        <Square4x4></Square4x4>
        <VertLine></VertLine>
        <VertLine></VertLine>
        <Square4x4></Square4x4>
        <FlatLine></FlatLine>
        <Square4x4></Square4x4>
        <VertLine></VertLine>
        <Square2x2></Square2x2>
        <FlatLine></FlatLine>
        <Square2x2></Square2x2>
        <Square2x2></Square2x2>


        </Main>
    )    
}

export default maingrid