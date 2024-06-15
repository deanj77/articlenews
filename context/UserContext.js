'use client+'
import { createContext,useContext } from "react";


export const usercontext = createContext({
    users:[],
    addUser(users){

    }
})

export const useUserContext = ()=>{
    useContext(usercontext)
}