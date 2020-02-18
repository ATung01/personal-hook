import React from 'react'
import styled from 'styled-components'
import Shape from './shape'
import Headshot from './images/headshot.jpg'

const ProfileArea = styled.img`
max-height: 100%;
min-width: 100%;
`
const BackgroundShape = styled(Shape)`
background-color: white;
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