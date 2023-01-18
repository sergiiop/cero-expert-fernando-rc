import { useState } from 'react'

interface Obj {
  [key: string]: string
}

export const useForm = (initialForm: Obj) => {
  const [formState, setFormState] = useState(initialForm)

  const onInputChange = ({ target }: any) => {
    const { name, value } = target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const onResetForm = () => {
    setFormState(initialForm)
  }

  return { formState, ...formState, onInputChange, onResetForm }
}
