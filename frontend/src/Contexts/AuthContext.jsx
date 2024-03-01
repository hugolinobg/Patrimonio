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
    try {
      const response = await Api.post("/auth", {
        email,
        password,
      })

      if (response.data.error) {
        alert(response.data.error)
      } else {
        setUser(response.data)
        Api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`
        localStorage.setItem("@Auth:user", JSON.stringify(response.data.user))
        localStorage.setItem("@Auth:token", response.data.token)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const signOut = () => {
    localStorage.removeItem("@Auth:user")
    localStorage.removeItem("@Auth:token")
    setUser(null)
    return <Navigate to="/" />
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        signEd: !!user,
      }}
    >
      {PropsType.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
