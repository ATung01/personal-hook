import React, { useState } from 'react'
import styled from 'styled-components'

const Shape = styled.div`
grid-row: ${props => props.rowSize || 'span 2'};
grid-column: ${props => props.columnSize || 'span 2'};
background-color: ${props => props.bgColor || 'red'};
`

function shape(props) {
    console.log(props.bgColor || 'red')

    return (
        <Shape {...props}>    
        </Shape>
    )    
}

export default shape