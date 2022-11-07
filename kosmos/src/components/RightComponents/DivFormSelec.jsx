import React from 'react'

const DivFormSelec = (props) => {
    console.log(props)
    const {data, delItem} = props
  return (
    <div className='div-form'> 
        <div className='div-form-input'>
            <h3>{data.label}</h3>
            <select>
               {
                data.options.map(el => <option key={el.id}>{el.name}</option>)
               }
            </select>
        </div>
        <button onClick={(e) => delItem(e)} value={data.uid} className='delete'>X</button>
    </div>
  )
}

export default DivFormSelec