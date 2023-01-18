import { FC, ReactElement, useState } from 'react'
import { AddCategory, GifGrid } from './components/'

export const GifExpertApp: FC = (): ReactElement => {
  const [categories, setCategories] = useState<string[]>([
    'One punch',
    'Dragon Ball'
  ])

  const onAddCategory = (value: string) => {
    if (categories.includes(value)) return
    setCategories((prev) => [value, ...prev])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}
