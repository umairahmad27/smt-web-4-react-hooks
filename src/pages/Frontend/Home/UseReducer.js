import React, { useState, useReducer } from 'react'

const initialState = {}

const reducer = (state, action) => {

    switch (action.type) {
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        default:
            return initialState
    }

    if (action.type === "INCREMENT") {
        return state + 1
    }
    else if (action.type === "DECREMENT") {
        return (state > 0 ? state - 1 : state)
    }
    else {
        return initialState
    }
}


export default function UseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState)


    // const [count, setCount] = useState(0)

    // const handleIncrement = () => {
    //     setCount(s => s + 1)
    // }
    // const handleDecrement = () => {
    //     count > 0 && setCount(s => s - 1)
    // }

    return (
        <>
            <h1>UseReducer</h1>
            {state}
            <button onClick={() => { dispatch({ type: "INCREMENT" }) }}>Increment</button>
            <h2>{state}</h2>
            <button onClick={() => { dispatch({ type: "DECREMENT" }) }}>Decrement</button>
            <hr />
            <button onClick={() => { dispatch({ type: "RESET" }) }}>Reset</button>
        </>
    )
}
