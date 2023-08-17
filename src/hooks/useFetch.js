import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    })

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true
        })

        try {            
            const response = await fetch(url)
            const data = await response.json()
            
            setState({
                data,
                isLoading: false,
                error: null
            })
        } 
        catch (error) {
            setState({
                ...state,
                isLoading: false,
                error
            })
        }
    }

    useEffect(() => {
        getFetch();
    }, [url])

    return {
        ...state,
    }
}