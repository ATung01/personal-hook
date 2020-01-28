import React, { useState } from 'react'
import styled from 'styled-components'

const Shape = styled.div`
grid-row: span 2;
grid-column: span 2;
background-color: red;
`

function square2x2() {

    return (
        <Shape>    
        </Shape>
    )    
}

export default square2x2