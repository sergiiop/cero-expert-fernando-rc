import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter(1)
  return (
    <>
      <div>CounterWithCustomHooks: {counter}</div>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>Resest</button>
      <button onClick={decrement}>-1</button>
    </>
  )
}
