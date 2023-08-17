import { useCounter, useFetch } from "../hooks";
import LoadingQuote from "../03-examples/LoadingQuote";
import Quote from "../03-examples/Quote";

const Layout = () => {
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

export default Layout;
