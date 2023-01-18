import { useEffect, useState } from 'react'
import { Message } from './Message'
export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'sergiiop',
    email: 'sergio@mail.com'
  })

  const { username, email } = formState

  const onInputChange = ({ target }: any) => {
    const { name, value } = target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <>
      <h1>Simple form</h1>
      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />
      <input
        type='email'
        className='form-control mt-2'
        placeholder='sergio@mail.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />
      {username === 'sergiiop' && <Message />}
    </>
  )
}
