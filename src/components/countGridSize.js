function CountGridSize(props) {
  let gridDimensions = window.getComputedStyle(props.gridComputedStyles.current)
  let numRows = gridDimensions.getPropertyValue('grid-template-rows').split(" ").length
  let numColumns = gridDimensions.getPropertyValue('grid-template-columns').split(" ").length

  let emptyChecker =  gridDimensions.getPropertyValue('grid-template-columns').split(" ")

  if (emptyChecker[numColumns - 1] == "0px") {
    numColumns -= 1
  }
  // an empty 0px column is sometimes generated from css grid, above is stopgap measure

  // console.log("computed style rows = ", gridDimensions.getPropertyValue('grid-template-rows'))
  // console.log("computed style columns = ", gridDimensions.getPropertyValue('grid-template-columns').split(" "))
  props.setNumRows(numRows)
  props.setNumColumns(numColumns)
}

export default CountGridSize