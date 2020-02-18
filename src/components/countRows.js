import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Counter = styled.div`
height: 0px;
width: 0px;
`

function CountRows(props) {
  const [rowCount, setRowCount] = useState()
  let numRows = () => {
    return window.getComputedStyle(props.gridComputedStyles.current)
      .getPropertyValue('grid-template-rows').split(" ").length
  }
  if (props.oldNumRows !== undefined) {
    console.log("old numbers being set")
    props.setOldNumRows(numRows)
  }
  useEffect(() => {
    setRowCount(numRows)
    props.setNumRows(rowCount)
    console.log("num rows =", rowCount)
  }, [rowCount])
  return (
    null
  )
}

export default CountRows