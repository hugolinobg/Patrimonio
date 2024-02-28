import { createContext, useEffect, useState } from "react"

import Api from "../services/api"

const AuthContext = createContext()

function AuthProvider(PropsType) {
  const [user, setUser] = useState("")

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
    const res = await Api.get("/auth", {
      email,
      password,
    })

    if (res.data.error) {
      alert(res.data.error)
    }

    setUser(res.data.user)
    Api.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`
    localStorage.setItem("@Auth:token", res.data.token)
    localStorage.setItem("@Auth:user", JSON.stringify(res.data.user))
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signEd: !!user,
        signIn,
      }}
    >
      {PropsType.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
