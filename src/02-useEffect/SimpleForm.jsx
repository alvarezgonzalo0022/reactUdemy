import { useEffect, useState } from "react"
import Message from "./Message";

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Zalo',
        email: 'gonzalo@google.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
      
    }, [])

    useEffect(() => {
      
    }, [formState])

    useEffect(() => {
      
    }, [email])
    

  return (
    <>
        <h1>SimpleForm</h1>
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

        { (username === 'Zalo2') && <Message /> }
    </>
  )
}

export default SimpleForm