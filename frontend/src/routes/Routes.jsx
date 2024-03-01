import { BrowserRouter, Routes, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute.jsx"
import Login from "../page/login/Login.jsx"
import Home from "../page/home/Home.jsx"
import Register from "../page/register/Register.jsx"
import Edit from "../page/edit/Edit.jsx"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>

        <Route path="/register" element={<PrivateRoute />}>
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/edit" element={<PrivateRoute />}>
          <Route path="/edit" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
