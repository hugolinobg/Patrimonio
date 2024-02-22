import { useEffect, useState } from "react"
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import ToggleButton from "react-bootstrap/ToggleButton"
import Button from "react-bootstrap/Button"

import api from "../../services/api.jsx"
import "./Home.css"

function Home() {
  const [patrimonys, setPatrimonys] = useState([])
  const [search, setSearch] = useState("")
  const [checked, setChecked] = useState(false)

  console.log(search)

  // console.log(
  //   patrimonys.filter((patrimony) =>
  //     patrimony.sector.toLowerCase().includes(patrimonys)
  //   )
  // )

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
      <div className="App">
        <Container>
          <h1 className="text-center mt-4">Gerenciamento de Patrimônios</h1>

          <Form>
            <InputGroup className="inputGroup my-4">
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
              />
              <Button variant="outline-primary">Cadastar</Button>
            </InputGroup>
          </Form>
          <Table
            // className="table"
            striped
            bordered
            // hover
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
              {patrimonys
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.numberPatrimony.toString().includes(search) ||
                        item.description.toLowerCase().includes(search) ||
                        item.sector.toLowerCase().includes(search)
                })
                .map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>{item.sector === null ? "" : item.sector}</td>
                      <td>
                        {item.numberPatrimony === null
                          ? ""
                          : item.numberPatrimony}
                      </td>
                      <td>
                        {item.description === null ? "" : item.description}
                      </td>
                      <td>
                        {item.unitDeliveryDate === null
                          ? ""
                          : item.unitDeliveryDate}
                      </td>
                      <td>
                        {item.previousSector === null
                          ? ""
                          : item.previousSector}
                      </td>
                      <td>
                        {item.destinationLocation === null
                          ? ""
                          : item.destinationLocation}
                      </td>
                      <td>
                        {item.transferDate === null ? "" : item.transferDate}
                      </td>
                      <td>
                        <input
                          id={item._id}
                          className="form-check-input mb-3"
                          type="checkbox"
                          role="switch"
                        />

                        <ToggleButton
                          id={item._id}
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
        </Container>
        {/* <div>
          <input
            type="search"
            placeholder="Search..."
            className="search"
            onChange={(e) => setPatrimonys(e.target.value)}
          />
        </div> */}
      </div>
    </>
  )
}

export default Home
