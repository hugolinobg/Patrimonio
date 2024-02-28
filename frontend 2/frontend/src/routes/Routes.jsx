import { BrowserRouter, Routes, Route } from "react-router-dom"
import PrivateRoutes from "./PrivateRoutes.jsx"
import Login from "../page/login/Login.jsx"
import Home from "../page/home/Home.jsx"
import Register from "../page/register/Register.jsx"
import Edit from "../page/edit/Edit.jsx"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route exact path="/" element={<Login />} />

        <Route path="/home" element={<PrivateRoutes />}>
          <Route exact path="/home" element={<Home />} />
        </Route>

        <Route path="/register" element={<PrivateRoutes />}>
          <Route exact path="/register" element={<Register />} />
        </Route>

        <Route path="/edit" element={<PrivateRoutes />}>
          <Route exact path="/edit" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
