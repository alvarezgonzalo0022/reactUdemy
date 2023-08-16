import { useEffect, useState } from "react"
import Message from "./Message";
import { useForm } from "../hooks/useForm";

const SimpleFormWithCustomHook = () => {

    const { onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });    

  return (
    <>
        <h1>SimpleFormWithCustomHook</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="gonzalo@google.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />

        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Password"
            name="password"
            value={ password }
            onChange={ onInputChange }
        />

        <button className="btn primary mt-2" onClick={ onResetForm }>Borrar</button>

        { (username === 'Zalo2') && <Message /> }
    </>
  )
}

export default SimpleFormWithCustomHook