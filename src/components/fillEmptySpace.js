import React from 'react'
import Shape from './shape'
import addKeys from './addKeys'
import styled from 'styled-components'

const DummyShape = styled(Shape)`
grid-row-end: 'span 2';
grid-column-end: 'span 2';
background-color: 'white';
`



function FillEmptySpace({ numRows, layout, fill, setFill}) {
  let newLayout = layout
  const NewShape = <DummyShape/>
  // setFill([NewShape, NewShape, NewShape])
  // newLayout.push(newShape)
  // addKeys(newLayout)
  // useEffect( () => {
  //     console.log(oldNumRows)
  //     setLayout(newLayout)
  // })
  // if (layout.length < 40) {
  //   setLayout([...layout, newShape])
  // }


  return null
}

export default FillEmptySpace
