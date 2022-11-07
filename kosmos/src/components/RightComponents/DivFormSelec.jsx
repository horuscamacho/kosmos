import React from 'react'

const DivFormSelec = (props) => {
    console.log(props)
    const {data} = props
  return (
    <div className='div-form'> 
        <div className='div-form-input'>
            <h3>{data.label}</h3>
            <select>
               {
                data.options.map(el => <option>{el}</option>)
               }
            </select>
        </div>
        <button className='delete'>X</button>
    </div>
  )
}

export default DivFormSelec