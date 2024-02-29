import { createContext, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

import Api from "../services/api"

const AuthContext = createContext()

function AuthProvider(PropsType) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loadingStoreData = async () => {
      const storageUser = localStorage.getItem("@Auth:user")
      const storageToken = localStorage.getItem("@Auth:token")

      if (storageUser && storageToken) {
        setUser(storageUser)
      }
    }
    loadingStoreData()
  }, [])

  const signIn = async ({ email, password }) => {
    const res = await Api.post("/auth", {
      email,
      password,
    })

    if (res.data.error) {
      alert(res.data.error)
    } else {
      setUser(res.data.user)
      Api.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`
      localStorage.setItem("@Auth:token", res.data.token)
      localStorage.setItem("@Auth:user", JSON.stringify(res.data.user))
    }
  }

  const signOut = () =>{
     localStorage.removeItem("@Auth:token")
     localStorage.removeItem("@Auth:user")
     setUser(null)
     return <Navigate to="/" />
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signEd: !!user,
        signIn,
        signOut,
      }}
    >
      {PropsType.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
