import React, { useState } from 'react'
import styled from 'styled-components'

const ShapedLayout = styled.div`
grid-row-end: ${props => props.row || 'span 2'};
grid-column-end: ${props => props.column || 'span 2'};
background-color: ${props => props.newBGColor ? props.newBGColor 
                    : props.bgColor ? props.bgColor : 'white'};
border-right: 3px solid black;
border-bottom: 3px solid black;
`

function Shape(props) {
    const [color, setColor] = useState(null)
    const changeColor = (e) => {
        setColor('white')
    }


    return (
        <ShapedLayout 
            {...props} 
            newBGColor={color}
            onClick={changeColor}>    
        </ShapedLayout>
    )    
}

export default Shape