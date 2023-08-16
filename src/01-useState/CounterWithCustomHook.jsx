import { useCounter } from "../hooks/useCounter"

const CounterWithCustomHook = () => {

    const { counter } = useCounter();

  return (
    <>
        <h1>Counter with Hook: { counter }</h1>
        <hr />

        <button className="btn primary">+1</button>
        <button className="btn primary">Reset</button>
        <button className="btn primary">-1</button>
    </>
  )
}

export default CounterWithCustomHook