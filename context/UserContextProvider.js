'use client'
import { useState } from 'react'

const UserContextProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const addUser = (user)=>{
        setUsers(...users,user)
    }
  return (
    <div>
      
    </div>
  )
}

export default UserContextProvider
