import { ChangeEvent, FC, useState } from 'react'

interface Props {
  onNewCategory: (value: string) => void
}

export const AddCategory: FC<Props> = ({ onNewCategory }): JSX.Element => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const valueTrim = inputValue.trim()
    if (valueTrim.length <= 1) return
    onNewCategory(valueTrim)
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar Gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
