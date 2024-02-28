import { useContext } from "react"
import { EditContext } from "../Contexts/EditContext"

function useEditContext() {
  const context = useContext(EditContext)

  if (context === undefined) {
    throw new Error("Não está dentro do contexto")
  }

  return context
}

export default useEditContext
