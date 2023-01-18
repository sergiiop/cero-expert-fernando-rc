import { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { Message } from './Message'

export const SimpleFormWithHooks = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: ''
  })

  return (
    <>
      <h1>Simple form</h1>
      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={formState.username}
        onChange={onInputChange}
      />
      <input
        type='email'
        className='form-control mt-2'
        placeholder='sergio@mail.com'
        name='email'
        value={formState.email}
        onChange={onInputChange}
      />
      <input
        type='password'
        className='form-control mt-2'
        placeholder='pass'
        name='password'
        value={formState.password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm}>Borrar</button>
    </>
  )
}
