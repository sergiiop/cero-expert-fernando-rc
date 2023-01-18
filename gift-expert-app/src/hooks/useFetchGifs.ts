import { useEffect, useState } from 'react'
import { getGifs, gifInterface } from '../helpers/getGifs'

export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState<gifInterface[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const newImages = await getGifs(category)
    setImages(newImages)
    setIsLoading(false)
  }

  useEffect(() => {
    getImages()
  }, [])

  return {
    images,
    isLoading
  }
}
