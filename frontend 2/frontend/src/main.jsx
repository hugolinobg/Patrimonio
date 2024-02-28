import React from "react"
import ReactDOM from "react-dom/client"
import Routes from "./routes/Routes"
import { EditProvider } from "./Contexts/EditContext"
import { AuthProvider } from "./Contexts/AuthContext"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <EditProvider>
        <Routes />
      </EditProvider>
    </AuthProvider>
  </React.StrictMode>
)
