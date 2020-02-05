import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const ShapedLayout = styled.div`
grid-row: ${props => props.row || 'span 2'};
grid-column: ${props => props.column || 'span 2'};
background-color: ${props => props.newBGColor ? props.newBGColor : props.bgColor};
`

function Shape(props) {
    const [color, setColor] = useState(null)
    const changeColor = (e) => {
        setColor('blue')
    }
    console.log(color)

    return (
        <ShapedLayout 
            {...props} 
            newBGColor={color}
            onClick={changeColor}>    
        </ShapedLayout>
    )    
}

export default Shape