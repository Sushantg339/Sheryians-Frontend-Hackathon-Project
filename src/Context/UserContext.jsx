import React, { createContext, useState } from 'react'
export const userContext = createContext(null)
const UserContext = (props) => {
    const [users , setUsers] = useState([])

    console.log(users)
    return (
        <userContext.Provider value={{users , setUsers}}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserContext