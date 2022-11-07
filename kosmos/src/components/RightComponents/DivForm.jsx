import React from 'react'

const DivFormInput = (props) => {
    const {data, deleteItem} = props
  return (
    <div className='div-form'>
        <div className='div-form-input'>
            <h3>{data.label}</h3>
            <input className='input-text' />
        </div>
        <button onClick={(e) => deleteItem(e)} className='delete' value={data.uid}>X</button>
    </div>
  )
}

export default DivFormInput