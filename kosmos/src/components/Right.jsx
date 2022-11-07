import React, { useEffect, useState } from 'react'
import DivFormOption from './RightComponents/DivFormOption'

const Right = (props) => {
    const {data, deleteItem} = props
    console.log(data)
    useEffect(() => {

    }, [data])
  return (
    <div className='right-section'>
        <form>
            {
                data.map(el => console.log(el[0].type))
            }
        </form>
    </div>
  )
}

export default Right