import {useEffect, useState} from "react"
import api from "../../services/api.jsx"
import "./Home.css"


function Home() {
  const [patrimony, setPatrimony] = useState([])

  useEffect(()=>{
    api
      .get("/patrimony")
      .then()
      .catch("")
  })
  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Gerenciamento de Patrimônios</h1>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Pedidos</th>
                <th>Data</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}


export default Home