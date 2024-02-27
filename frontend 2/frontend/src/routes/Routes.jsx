import { BrowserRouter, Routes, Route } from "react-router-dom"

import Signin from "../page/signin/Signin.jsx"
import Home from "../page/home/Home.jsx"
import Register from "../page/register/Register.jsx"
import Edit from "../page/edit/Edit.jsx"

const Private = ({ Item }) => {
  const signed = false

  return signed > 0 ? <Item /> : <Signin />
}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Signin />} />
        <Route exact path="/" element={<Signin />} />
        <Route path="/home" element={<Private Item={Home} />} />
        <Route path="/register" element={<Private Item={Register} />} />
        <Route path="/edit" element={<Private Item={Edit} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
