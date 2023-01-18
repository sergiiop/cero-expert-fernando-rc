import { FC } from 'react'
import { gifInterface } from '../helpers/getGifs'

export const GifItem: FC<gifInterface> = ({ title, url }) => {
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
