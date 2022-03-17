// import React, { createContext, useState, useContext } from 'react'
// import api from '../services/api'

// const CountContext = createContext()

// export function CountProvider({ children }) {

//     // const URL = `/customers.json`
//     // api
//     //     .get(URL)
//     //     .then(response => {
//     //         setItems(response.data.customers)
//     //         console.log("Aqui 1: ", response.data.customers)

//     //     })


//     // const [items, setItems] = useState("")
//     return (
//         <CountContext.Provider value={{
//             items,
//             setItems
//         }}>
//             {children}
//         </CountContext.Provider>
//     )
// }

// export function useCount() {
//     const context = useContext(CountContext)
//     const { items, setItems } = context
//     return { items, setItems }
// }