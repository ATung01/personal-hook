function CountGridSize(props) {
  props.setFill([])

  let gridDimensions = window.getComputedStyle(props.gridComputedStyles.current)
  let rows = gridDimensions.getPropertyValue('grid-template-rows').split(" ")
  let columns = gridDimensions.getPropertyValue('grid-template-columns').split(" ")


  // let emptyChecker =  gridDimensions.getPropertyValue('grid-template-columns').split(" ")

  // if (emptyChecker[numColumns - 1] === "0px") {
  //   numColumns -= 1
  // }
  // console.log("rows = ", rows.filter((x) => x === '0px'))
  let numRows = rows.length - (rows.filter((x) => x === '0px').length)
  let numColumns = columns.length - (columns.filter((x) => x === '0px').length)

  // an empty 0px column is sometimes generated from css grid, above is stopgap measure
  // console.log("numrows =", numRows)
  // console.log("numcolumns =", numColumns)
  // console.log(props)
  // console.log("computed style rows = ", gridDimensions.getPropertyValue('grid-template-rows'))
  // console.log("computed style columns = ", gridDimensions.getPropertyValue('grid-template-columns').split(" "))
  props.setNumRows(numRows)
  props.setNumColumns(numColumns)
  
  props.fillSpace()
}

export default CountGridSize