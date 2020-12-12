import React from 'react'
import styled from 'styled-components'
import Shape from './shape'
import Headshot from './images/headshot.jpg'

const ProfileArea = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
`
const BackgroundShape = styled(Shape)`
background-color: black;
border: 0px;
border-right: 3px solid black;
overflow: hidden;
`

function Profile(props) {
    
    return(
        <BackgroundShape {...props}>
            <ProfileArea src={Headshot}></ProfileArea>
        </BackgroundShape>
    )
}

export default Profile