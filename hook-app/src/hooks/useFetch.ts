import { useEffect, useState } from 'react'

export const useFetch = (url: string) => {
  const [state, setState] = useState<any>({
    data: null,
    isLoading: true,
    hasError: null
  })

  const getFetch = async () => {
    setState({ ...state, isLoading: true })
    const respuesta = await fetch(url)
    const data = await respuesta.json()
    console.log(data)
    setState({
      data,
      isLoading: false,
      hasError: null
    })
  }

  useEffect(() => {
    getFetch()
  }, [url])

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}
