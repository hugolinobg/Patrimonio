import { useState } from "react"
import { useNavigate } from "react-router-dom"
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

  const [dateUnitDeliveryPtbr, setDateUnitDeliveryPtbr] = useState("")
  const [dateTransferPtBr, setDateTransferPtBr] = useState("")

  function formatDate() {
    let dateUnitDelivery = new Date(dateUnitDeliveryPtbr)
    let dateTransfer = new Date(dateTransferPtBr)

    setUnitDeliveryDate(
      dateUnitDelivery.toLocaleDateString("pt-BR", {
        timeZone: "UTC",
      })
    )
    setTransferDate(
      dateTransfer.toLocaleDateString("pt-BR", {
        timeZone: "UTC",
      })
    )
    return
  }

  function handleSubmit(e) {
    e.preventDefault()
    formatDate()
    if (
      sector === "" ||
      numberPatrimony === "" ||
      description === "" ||
      unitDeliveryDate === ""
    ) {
      alert("Preencha todos os campos!")
      return
    }

    const patrimonys = {
      sector,
      numberPatrimony,
      description,
      unitDeliveryDate,
      previousSector,
      transferDate,
      destinationLocation,
    }

    console.log(patrimonys)

    Api
      .post("/patrimony", patrimonys)
      .then(navigate("/"))
      .catch((error) => {
        alert(`Erro ao Cadastrar de Patrimônio - ${error}`)
      })
  }

  return (
    <>
      <div className="main formRgt">
        <h1>Cadastro de Patrimônio</h1>
        <hr />

        <Form className="form">
          <FormGroup className="mb-3" controlId="formSector">
            <Form.Label>Setor:</Form.Label>
            <Form.Control
              type="texte"
              placeholder="Sala 08"
              onChange={(e) => setSector(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup className="mb-3" controlId="formNumberPatrimony">
            <Form.Label>Número do Patrimônio:</Form.Label>
            <Form.Control
              type="number"
              placeholder="175698"
              onChange={(e) => setNumberPatrimony(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup className="mb-3" controlId="formDescription">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Descrição do Patrimônio"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="mb-3" controlId="formUnitDeliveryDate">
            <Form.Label>Data de Entrega na Unidade:</Form.Label>
            <Form.Control
              type="date"
              required
              onChange={(e) => setDateUnitDeliveryPtbr(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="mb-3" controlId="formPreviousSector">
            <Form.Label>Setor Anterior:</Form.Label>
            <Form.Control
              type="text"
              placeholder="LMT"
              onChange={(e) => setPreviousSector(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="mb-3" controlId="formTransferDate">
            <Form.Label>Data de Transferência:</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setDateTransferPtBr(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="mb-3" controlId="formDestinationLocation">
            <Form.Label>Localização de Destino:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Birigui"
              onChange={(e) => setDestinationLocation(e.target.value)}
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
    </>
  )
}

export default Register
