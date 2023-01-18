import { useFetch, useCounter } from './../hooks/'

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1)
  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/ditto`
  )

  const { name } = !!data && data
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {isLoading ? (
        <div className='alert alert-info text-center'>Loading</div>
      ) : (
        <blockquote className='blockquote text-end'>{name}</blockquote>
      )}

      <button className='btn btn-primary' onClick={() => increment()}>
        Next Quote
      </button>
    </>
  )
}
