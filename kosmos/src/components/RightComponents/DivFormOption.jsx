import React from 'react'

const DivFormOption = (props) => { 
    const{name, uid} = props
  return (
    <div className='div-form'>
        <div className='div-form-input'>
            <input type="radio" name={name} value={uid}/>
            <h3>{name}</h3>
        </div>
        <button className='delete' value={uid}>X</button>
    </div>
  )
}

export default DivFormOption