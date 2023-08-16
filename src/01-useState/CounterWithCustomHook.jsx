import { useCounter } from "../hooks/useCounter"

const CounterWithCustomHook = () => {

    const { counter, increment, reset, decrement } = useCounter();

  return (
    <>
        <h1>Counter with Hook: { counter }</h1>
        <hr />

        <button className="btn primary" onClick={() => increment(2) }>+1</button>
        <button className="btn primary" onClick={ reset }>Reset</button>
        <button className="btn primary" onClick={ () => decrement(2) }>-1</button>
    </>
  )
}

export default CounterWithCustomHook