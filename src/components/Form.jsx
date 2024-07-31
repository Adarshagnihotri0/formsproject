import React from 'react'
import {useForm} from 'react-hook-form'

function Form({handleFormSubmitData}) {
  const {register, handleSubmit, reset} = useForm()

  const handleFormSubmit = (data) => {
    handleFormSubmitData(data) //passing to parents
    reset();
}


  return (
    <div className='mt-10 flex justify-center'>
        <form className='flex gap-10' action="" onSubmit={handleSubmit(handleFormSubmit)}>
            <input {...register('name')} className='rounded-md outline-none p-2 font-semibold text-sm px-2' type="text" placeholder='name' />
            <input {...register('email')} className='rounded-md outline-none p-2 font-semibold text-sm px-2' type="email" placeholder='email' />
            <input {...register('image')} className='rounded-md outline-none p-2 font-semibold text-sm px-2' type="" placeholder='image URL' />
            <input className='px-5 py-1 bg-blue-700 text-sm text-white rounded-md' type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Form