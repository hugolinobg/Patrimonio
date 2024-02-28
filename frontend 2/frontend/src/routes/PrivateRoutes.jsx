import { Navigate, Outlet } from "react-router-dom"
import useAuthContext from "../hook/useAuthContext"

function PrivateRoutes(){
  const { signEd } = useAuthContext()

  return signEd ? <Outlet /> : <Navigate to="/" />
}


export default PrivateRoutes