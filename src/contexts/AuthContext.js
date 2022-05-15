import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export default function AuthContextProvider(props) {

    const [count, setCount] = useState(0)

    const [userName, setUserName] = useState("Ahmad")

    return (
        <AuthContext.Provider value={{ count, setCount, userName, setUserName }}>
            {props.children}
        </AuthContext.Provider>
    )
}
