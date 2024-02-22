import { useEffect, useState } from "react"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import ToggleButton from "react-bootstrap/ToggleButton"
import api from "../../services/api.jsx"
import "./Home.css"

function Home() {
  const [patrimonys, setPatrimonys] = useState([])
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    api
      .get("/patrimony")
      .then((res) => {
        setPatrimonys(res.data)
      })
      .catch((error) => {
        alert(`Erro ao carregar os dados do Patrimonio - ${error}`)
      })
  })
  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Gerenciamento de Patrimônios</h1>
        </div>
        <div>
          <Table
            className="table"
            striped
            bordered
            hover
            variant="dark"
            responsive
          >
            <thead>
              <tr>
                <th>Setor</th>
                <th>Nº do Patrimônio</th>
                <th>Descrição</th>
                <th>Data de Entrega na Unidade</th>
                <th>Setor Anterior</th>
                <th>Localização de Destino</th>
                <th>Data de Transferência</th>
                <th>Patrimônio Verificado</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {patrimonys.map((patrimony) => {
                return (
                  <tr key={patrimony._id}>
                    <td>{patrimony.sector === null ? "" : patrimony.sector}</td>
                    <td>
                      {patrimony.numberPatrimony === null
                        ? ""
                        : patrimony.numberPatrimony}
                    </td>
                    <td>
                      {patrimony.description === null
                        ? ""
                        : patrimony.description}
                    </td>
                    <td>
                      {patrimony.unitDeliveryDate === null
                        ? ""
                        : patrimony.unitDeliveryDate}
                    </td>
                    <td>
                      {patrimony.previousSector === null
                        ? ""
                        : patrimony.previousSector}
                    </td>
                    <td>
                      {patrimony.destinationLocation === null
                        ? ""
                        : patrimony.destinationLocation}
                    </td>
                    <td>
                      {patrimony.transferDate === null
                        ? ""
                        : patrimony.transferDate}
                    </td>
                    <td>
                      <input
                        id={patrimony._id}
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                      />

                      <ToggleButton
                        id={patrimony._id}
                        type="checkbox"
                        checked={checked}
                        value={checked}
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                      >
                        Verificado
                      </ToggleButton>
                    </td>
                    <td>
                      {
                        <Button variant="outline-primary">Editar</Button>

                        // <button
                        //   type="button"
                        //   className="btn btn-sm btn-outline-primary"
                        //   data-bs-toggle="modal"
                        //   data-bs-target="#exampleModal"
                        // >
                        //   Editar
                        // </button>
                      }
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default Home
