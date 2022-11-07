import React from 'react'

const DivFormSelec = (props) => {
    const {uid, name, options} = props
  return (
    <div className='div-form'> 
        <div className='div-form-input'>
            <h3>{name}</h3>
            <select>
                {
                    options.map(el => <option>{el}</option>)
                }
            </select>
        </div>
    </div>
  )
}

export default DivFormSelec