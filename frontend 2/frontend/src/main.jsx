import React from "react"
import ReactDOM from "react-dom/client"
import Routes from "./routes/Routes"
import {EditProvider} from "./Contexts/EditContext"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EditProvider>
      <Routes />
    </EditProvider>
  </React.StrictMode>
)
