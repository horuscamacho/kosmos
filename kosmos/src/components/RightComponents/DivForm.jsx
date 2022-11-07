import React from 'react'

const DivFormInput = (props) => {
    const {name, uid} = props
    console.log(props)
  return (
    <div className='div-form'>
        <div className='div-form-input'>
            <h3>{name}</h3>
            <input className='input-text' />
        </div>
        <button className='delete' value={uid}>X</button>
    </div>
  )
}

export default DivFormInput