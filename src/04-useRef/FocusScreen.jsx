import { useRef } from "react"

const FocusScreen = () => {

    const inputRef = useRef();

    const onClickBtn = () => {
        inputRef.current.select();
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            ref={ inputRef }
            type="text"
            placeholder="Ingrese su nombre" 
            className="form-control"
        />

        <button className="btn btn-primary mt-2" onClick={ onClickBtn }>
            Set Focus
        </button>
    </>
  )
}

export default FocusScreen