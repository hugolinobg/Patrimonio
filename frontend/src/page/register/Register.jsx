import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import FormGroup from "react-bootstrap/esm/FormGroup"
import Api from "../../services/api"
import "./Register.css"

function Register() {
  const navigate = useNavigate()

  const [sector, setSector] = useState("")
  const [numberPatrimony, setNumberPatrimony] = useState("")
  const [description, setDescription] = useState("")
  const [unitDeliveryDate, setUnitDeliveryDate] = useState("")
  const [previousSector, setPreviousSector] = useState("")
  const [transferDate, setTransferDate] = useState("")
  const [destinationLocation, setDestinationLocation] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      sector === "" ||
      numberPatrimony === "" ||
      description === "" ||
      unitDeliveryDate === ""
    ) {
      alert(
        "Preencha os campos de Setor, Nº do Patrimônio, Descrição e Data de Entrega na Unidade!"
      )
      return
    }

    const data = {
      sector,
      numberPatrimony,
      description,
      unitDeliveryDate,
      previousSector,
      transferDate,
      destinationLocation,
    }

    Api.post("/patrimony", data)
      .then(navigate("/home"))
      .catch((error) => {
        alert(`Erro ao Cadastrar de Patrimônio - ${error.response.data}`)
      })
  }

  return (
    <div className="main">
      <div className="formRgt">
        <Link className="linkBtn" to="/home">
          Voltar
        </Link>
        <h1>Cadastro de Patrimônio</h1>
        <hr />

        <Form className="form">
          <FormGroup className="mb-3">
            <Form.Label>Setor:</Form.Label>
            <Form.Control
              type="texte"
              placeholder="Sala 08"
              required
              onChange={(e) => setSector(e.target.value.toLowerCase())}
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Form.Label>Número do Patrimônio:</Form.Label>
            <Form.Control
              type="number"
              placeholder="175698"
              required
              onChange={(e) => setNumberPatrimony(e.target.valueAsNumber)}
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Descrição do Patrimônio"
              required
              onChange={(e) => setDescription(e.target.value.toLowerCase())}
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Form.Label>Data de Entrega na Unidade:</Form.Label>
            <Form.Control
              type="date"
              required
              onChange={(e) =>
                setUnitDeliveryDate(
                  e.target.valueAsDate.toLocaleDateString("pt-BR", {
                    timeZone: "UTC",
                  })
                )
              }
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Form.Label>Setor Anterior:</Form.Label>
            <Form.Control
              type="text"
              placeholder="LMT"
              onChange={(e) => setPreviousSector(e.target.value.toLowerCase())}
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Form.Label>Data de Transferência:</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) =>
                setTransferDate(
                  e.target.valueAsDate.toLocaleDateString("pt-BR", {
                    timeZone: "UTC",
                  })
                )
              }
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Form.Label>Localização de Destino:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Birigui"
              onChange={(e) =>
                setDestinationLocation(e.target.value.toLowerCase())
              }
            />
          </FormGroup>

          <Button
            className="mt-5"
            variant="outline-success"
            size="lg"
            type="submit"
            onClick={handleSubmit}
          >
            Cadastrar
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Register
