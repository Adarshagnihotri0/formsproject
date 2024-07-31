import React from 'react'
import Card from './Card'

function Cards({users, handleRemove}) {
  return (
    <div className='w-full h-96 max-h-96 overflow-auto  flex flex-wrap justify-center items-center p-10 gap-5'>
        {users.map((item,index)=>{
            return <Card handleRemove = {handleRemove} user={item} id={index} key={index} /> 
        })}
    </div>
  )
}

export default Cards