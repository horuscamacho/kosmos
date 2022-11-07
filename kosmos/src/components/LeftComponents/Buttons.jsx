import React from 'react'

const Buttons = (props) => {
    const {text, addItem, value} = props
  return (
    <button onClick={(e) => addItem(e)} value={value}>
        Add {text}
    </button>
    )
}

export default Buttons