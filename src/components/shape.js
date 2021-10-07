import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const ShapedLayout = styled.div`
grid-row-end: ${props => props.row || 'span 2'};
grid-column-end: ${props => props.column || 'span 2'};
background-color: ${props => props.newBGColor ? props.newBGColor 
                    : props.bgColor ? props.bgColor : 'white'};
border: 2px solid black;
`

function Shape(props) {
  const [color, setColor] = useState()
  // const [height, setHeight] = useState()
  // const [width, setWidth] = useState()
  // const shapeRef = useRef(null)
  const changeColor = (e) => {
    setColor('white')
  }
  // useEffect(() => {
  //   setHeight(shapeRef.current.offsetHeight)
  //   setWidth(shapeRef.current.offsetWidth)
  // })
  return (
    <ShapedLayout 
      {...props}
      // ref={shapeRef}
      className={props.className} 
      newBGColor={color}
      onClick={changeColor}>    
    </ShapedLayout>
  )    
}

export default Shape