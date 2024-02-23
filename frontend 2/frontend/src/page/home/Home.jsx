import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"

import api from "../../services/api.jsx"
import "./Home.css"

function Home() {
  const [patrimonys, setPatrimonys] = useState([])
  const [search, setSearch] = useState("")
  // const [checked, setChecked] = useState(false)

  const [checkboxStatus, setCheckboxStatus] = useState(
    JSON.parse(localStorage.getItem("checkboxStatus")) || {}
  )

  useEffect(() => {
    localStorage.setItem("checkboxStatus", JSON.stringify(checkboxStatus))
  }, [checkboxStatus])

  const handleCheckboxChange = (rowIndex) => {
    setCheckboxStatus((prevStatus) => ({
      ...prevStatus,
      [rowIndex]: !prevStatus[rowIndex],
    }))
  }

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
      <Container className="main">
        <h1 className="text-center my-5">Gerenciamento de Patrimônios</h1>
        <hr />

        <Form>
          <InputGroup className="inputGroup my-5">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
            />
            <Link to={"/register"}>
              <Button variant="outline-primary">Cadastar</Button>
            </Link>
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
                return search === ""
                  ? item
                  : item.numberPatrimony
                      .toString()
                      .includes(search.toString()) ||
                      item.description
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      item.sector.toLowerCase().includes(search.toLowerCase())
              })
              .map((item, rowIndex) => {
                return (
                  <tr
                    key={rowIndex}
                    className={checkboxStatus[rowIndex] ? "selected-row" : ""}
                  >
                    <td>{item.sector === null ? "" : item.sector}</td>
                    <td>
                      {item.numberPatrimony === null
                        ? ""
                        : item.numberPatrimony}
                    </td>
                    <td>{item.description === null ? "" : item.description}</td>
                    <td>
                      {item.unitDeliveryDate === null
                        ? ""
                        : item.unitDeliveryDate}
                    </td>
                    <td>
                      {item.previousSector === null ? "" : item.previousSector}
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
                        className="form-check-input mb-4"
                        type="checkbox"
                        role="switch"
                        checked={checkboxStatus[rowIndex] || false}
                        onChange={() => handleCheckboxChange(rowIndex)}
                      />
                      <Form.Label for={item._id}>Verificado</Form.Label>
                    </td>
                    <td>{<Button variant="outline-primary">Editar</Button>}</td>
                  </tr>
                )
              })}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default Home
