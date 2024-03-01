import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthContext"

function useAuthContext() {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error("Não está dentro do contexto")
  }

  return context
}

export default useAuthContext
