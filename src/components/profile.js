import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Shape from './shape'
import Headshot from './images/headshot.jpg'

const ProfileArea = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
`

// let checkNumColumns = (props) => {
//         console.log("props", props)
//     if (props.numColumns < 8 ) {
//         console.log("true")
//         return true
//     }
//     console.log("false")
// }
let numColumns = 20

let BackgroundShape = styled(Shape)`
background-color: black;
border-bottom: 0px;
overflow: hidden;
${'' /* grid-row-end: ${props =>  checkNumColumns ? 'span 4' : 'span 8'}; */}
${'' /* grid-column-end: ${props => checkNumColumns ? 'span 4' : 'span 8'}; */}
${'' /* grid-row-end: ${props => numColumns ? numColumns <= 9 ? 'span 4' : 'span8' :
                                    props.numColumns ? 'span 4' : 'span 8' };
grid-column-end: ${props => numColumns ? numColumns <= 9 ? 'span 4' : 'span8' :
props.numColumns ? 'span 4' : 'span 8' }; */}
grid-column-end: ${props => props.numColumns <= 8 ? 'span 4' : 'span 8'};
grid-row-end: ${props => props.numColumns <= 8 ? 'span 4' : 'span 8'};
`

function Profile(props) {
    // const [numColumns, setNumColumns] = useState(props.numColumns)
    // useEffect(() => {
    //     setNumColumns(props.numColumns)
    // })
    // console.log(props)    
    // console.log("profile props", props.numColumns)
    return(
        <BackgroundShape  {...props}>
            <ProfileArea src={Headshot}></ProfileArea>
        </BackgroundShape>
    )
}

export default Profile