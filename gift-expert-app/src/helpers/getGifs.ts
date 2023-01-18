export interface gifInterface {
  id: string
  title: string
  url: string
}

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Tjo1DippQnX5gvaplRfTSwZDfHo22UPT&q=${category}&limit=5&offset=0&rating=g&lang=en`
  const response = await fetch(url)
  const { data } = await response.json()

  const gifs: gifInterface[] = data.map((img: any) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  return gifs
}
