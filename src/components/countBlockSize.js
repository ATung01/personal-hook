function countBlockSize(el) {
  // let gridDimensions = window.getComputedStyle(gridComputedStyles.current)
  // console.log("grid dimensions =", gridDimensions)
  // console.log("answer =", gridDimensions.getPropertyValue("width"))

  console.log("classname =", el)
  // let numRows = gridDimensions.getPropertyValue('grid-template-rows').split(" ").length
  // let numColumns = gridDimensions.getPropertyValue('grid-template-columns').split(" ").length

  let col = JSON.stringify(el.props.column).match(/[0-9]/g).join("")
  let row = JSON.stringify(el.props.row).match(/[0-9]/g).join("")
  let size = col * row


  // let gridDimensions = window.getComputedStyle(el.props)
  // let numRows = gridDimensions.getPropertyValue('grid-row-end').split(" ").length
  // let numColumns = gridDimensions.getPropertyValue('grid-column-end').split(" ").length
  // let size = numRows * numColumns

  return size
}

export default countBlockSize