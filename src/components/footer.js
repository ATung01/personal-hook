import React from 'react'
import styled from 'styled-components'
import Shape from './shape'


const FooterCSS = styled(Shape)`
grid-column: 1 / -1;
grid-row-start: 15;
${'' /* grid-row-end: -1; */}
`

function Footer(props) {
    console.log("Footer props = ", props)

    return(
        <FooterCSS {...props} />
    )
}

export default Footer