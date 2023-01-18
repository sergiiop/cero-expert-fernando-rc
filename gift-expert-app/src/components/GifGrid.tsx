import { FC, useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { gifInterface } from './../helpers/getGifs'
import { GifItem } from './GifItem'

interface Props {
  category: string
}

export const GifGrid: FC<Props> = ({ category }): JSX.Element => {
  const { images, isLoading } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando ...</h2>}
      <div className='card-grid'>
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  )
}
