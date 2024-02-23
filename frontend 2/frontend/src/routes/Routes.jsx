import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../page/home/Home.jsx"
import Register from "../page/register/Register.jsx"
import Update from "../page/update/Update.jsx"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
