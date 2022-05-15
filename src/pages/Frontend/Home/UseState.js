import React, { useState, useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'

export default function UseState() {

    const { count, setCount, setUserName } = useContext(AuthContext)

    // const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(s => s + 1)
    }
    const handleDecrement = () => {
        count > 0 && setCount(s => s - 1)
    }

    return (
        <>
            <h1>UseState</h1>
            <button onClick={handleIncrement}>Increment</button>
            <h2>{count}</h2>
            <button onClick={handleDecrement}>Decrement</button>
            <hr />
            <button onClick={() => { setCount(0) }}>Reset</button>

            <button onClick={() => { setUserName("Usama") }}>set username</button>
        </>
    )
}
