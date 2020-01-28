import React, { useState } from 'react'
import styled from 'styled-components'

const Title = styled.div`
display: grid;
grid-template-columns: 2em minmax(18em, 1fr) 1fr;
.titleHeader1 {
    grid-column-start: 1;
    grid-column-end: 3;
}
.titleHeader2 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    font-size: 10em;
    justify-self: end;
    margin: 0em;

}
.titleHeader3 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;
}
`

function titlebox() {
    return (
        <Title>
            <h3 className="titleHeader1">Hi, I'm </h3>
            <h1 className="titleHeader2">Alex</h1>
            <h3 className="titleHeader3">And this is my website.</h3>
        </Title>

    )
}

export default titlebox