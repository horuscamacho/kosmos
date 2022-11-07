import React from 'react'

const DivFormOption = (props) => { 
    const {data, delItem} = props
    
    return (
    <div className='div-form'>
        <div className='div-form-input'>
            <input type="radio" name={data.label} value={data.uid}/>
            <h3>{data.label}</h3>
        </div>
        <button onClick={(e) => delItem(e)} className='delete' value={data.uid}>X</button>
    </div>
  )
}

export default DivFormOption