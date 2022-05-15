import React, { useState, useEffect } from 'react'

export default function UseMemo() {
    const users = [
        { name: "Ali", status: "active" },
        { name: "Ahmad", status: "inactive" },
        { name: "Zubair", status: "active" },
        { name: "Kashif", status: "active" },
        { name: "Hassan", status: "active" },
        { name: "Nafees", status: "inactive" },
        { name: "Talha", status: "inactive" },
    ]
    // const [count, setCount] = useState(0);
    // const [todos, setTodos] = useState([]);
    const [filteredDocs, setFilteredDocs] = useState([]);
    const [status, setStatus] = useState("active");
    // const calculation = useMemo(() => expensiveCalculation(count), [count])


    // const increment = () => {
    //     setCount((c) => c + 1);
    // };
    // const addTodo = () => {
    //     setTodos((t) => [...t, "New Todo"]);
    // };

    useEffect(() => {

        // { name: "Ahmad", status: "inactive" }
        if (status === "all") {
            setFilteredDocs(users)
        } else {
            let newArray = users.filter((doc) => {
                return doc.status === status
            })
            setFilteredDocs(newArray)
            // console.log(newArray)
        }

    }, [])

    const statuses = ["active", "inactive", "all"]

    return (
        <div>
            <div>
                <h2>My Users</h2>
                {filteredDocs.map((doc, index) => {
                    return <p key={index} onClick={() => { console.log(doc) }}>{doc.name} is {doc.status}</p>;
                })}

                <select defaultValue={status} onChange={e => { setStatus(e.target.value) }}>
                    {statuses.map((status) => {
                        return <option key={status} value={status}>{status}</option>
                    })}
                </select>
                {/* <button onClick={addTodo}>Add Todo</button> */}
            </div>
            <hr />
            {/* <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div> */}
        </div>
    );
};

// const expensiveCalculation = (num) => {
//     console.log("Calculating...");
//     for (let i = 0; i < 1000000000; i++) {
//         num += 1;
//     }
//     return num;
// };
