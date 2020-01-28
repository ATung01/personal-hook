import React, { useState } from 'react'
import styled from 'styled-components'

const Shape = styled.div`
grid-row: span 8;
grid-column: span 2;
background-color: blue;
`

function flatline() {

    return (
        <Shape>    
        </Shape>
    )    
}

export default flatline