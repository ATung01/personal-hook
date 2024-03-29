import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Shape from './shape'
import Headshot from './images/headshot.jpg'

const ProfileArea = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
`
let BackgroundShape = styled(Shape)`
background-color: black;
border-bottom: 0px;
overflow: hidden;
grid-column: 1 / ${props => props.numColumns <= 8 ? 'span 4' : 'span 8'};
grid-row: 5 / ${props => props.numColumns <= 8 ? 'span 4' : 'span 8'};
`
function Profile(props) {
const [size, setSize] = useState()
useEffect(() => {
  props.numColumns <= 8 ? setSize('span 4') : setSize('span 8')
}, [props.numColumns])
// let size = props.numColumns <= 8 ? "smaller" : "bigger"
  return(
    <BackgroundShape  {...props} size={size} >
      <ProfileArea src={Headshot}></ProfileArea>
    </BackgroundShape>
  )
}

export default Profile