// import { useState, useEffect } from 'react'

function CountGridSize(props) {

    let gridDimensions = window.getComputedStyle(props.gridComputedStyles.current)
    let numRows = gridDimensions.getPropertyValue('grid-template-rows').split(" ").length
    let numColumns = gridDimensions.getPropertyValue('grid-template-columns').split(" ").length

    props.setNumRows(numRows)
    props.setNumColumns(numColumns)


}

export default CountGridSize