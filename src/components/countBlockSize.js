function countBlockSize(el) {
  // let gridDimensions = window.getComputedStyle(gridComputedStyles.current)
  // console.log("grid dimensions =", gridDimensions)
  // console.log("answer =", gridDimensions.getPropertyValue("width"))

  // let numRows = gridDimensions.getPropertyValue('grid-template-rows').split(" ").length
  // let numColumns = gridDimensions.getPropertyValue('grid-template-columns').split(" ").length
  const styles = window.getComputedStyle(document.getElementsByClassName("Main")[0])

  if (styles.getPropertyValue("grid-template-columns").split(" ").length <= 9 && el.props.className == "profile") {
    console.log("profile size small hit")
    return 16
  }


  let col = JSON.stringify(el.props.column).match(/[0-9]/g).join("")
  let row = JSON.stringify(el.props.row).match(/[0-9]/g).join("")
  let size = col * row


  // let gridDimensions = window.getComputedStyle(el.props)
  // console.log(gridDimensions)
  // let numRows = gridDimensions.getPropertyValue('grid-row-end').split(" ").length
  // let numColumns = gridDimensions.getPropertyValue('grid-column-end').split(" ").length
  // let size = numRows * numColumns

  return size
}

export default countBlockSize