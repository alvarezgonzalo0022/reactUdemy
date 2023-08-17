import { useCounter, useFetch } from "../hooks";
import LoadingQuote from "./LoadingQuote";
import Quote from "./Quote";

const MultipleCustomHooks = () => {
  const { data, isLoading, error } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/50`
  );

  const { counter, increment } = useCounter(0);
  const { author, quote } = !!data && data[counter];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
        isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />
      }

      <button className="btn btn-primary" onClick={() => increment(1)}>
        Next quote
      </button>
    </>
  );
};

export default MultipleCustomHooks;
