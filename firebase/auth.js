import react, { useState, useEffect, useContext, createContext } from 'react'
import nookies from 'nookies'
import firebase from './cliendauth'
import firebase from 'firebase/app'
import 'firebase/auth'
import cliendaut from './cliendauth'
import { async } from '@firebase/util'

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    cliendaut();
    const [user, setUser] = useState(null)

    useEffect(() => {
        return firebase.auth().onIdTokenChange(async (user) => {
            if(!user){
                setUser(null)
                nookies.set(undefined, "token", "", {})
                return
            }
            const token = await user.getIdToken()
            setUser(user)
            nookies.set(undefined, "token" , token, {})
        })
    }, [])

    return (<AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>)
}

export const useAuth = () => useContext(AuthContext)
