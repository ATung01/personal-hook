import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Counter = styled.div`
height: 0px;
width: 0px;
`

function CountRows(props) {
    const [rowCount, setRowCount] = useState()
    let numRows = () => {
        return window.getComputedStyle(props.gridComputedStyles.current).getPropertyValue('grid-template-rows').split(" ").length
    }
    useEffect(() => {
        setRowCount(numRows)
        console.log(window.getComputedStyle(props.gridComputedStyles.current).getPropertyValue('grid-template-rows').split(" ").length)
    }, [rowCount])

    return(
        <Counter rowCount = {rowCount}></Counter>
    )
    
}

export default CountRows