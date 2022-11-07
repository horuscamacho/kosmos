import React, { useEffect } from 'react'
import Buttons from './LeftComponents/Buttons'

const Left = (props) => {
    const {fields, addItem} = props 

    useEffect(() => {

    }, [fields])

  return (
    <div className='left-section'>
        <div className='elements'>
            {fields.map(el => <Buttons addItem={addItem} value={el.uid} text={el.label} key={el.uid}/>)}
        </div>
    </div>
  )
}

export default Left