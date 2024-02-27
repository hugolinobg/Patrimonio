import { useNavigate } from "react-router-dom"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import FormGroup from "react-bootstrap/esm/FormGroup"
import useEditContext from "../../hook/useEditContext"
import api from "../../services/api"
import "./Edit.css"

function Edit() {
  const navigate = useNavigate()

  const {
    id,
    sector,
    setSector,
    numberPatrimony,
    setNumberPatrimony,
    description,
    setDescription,
    unitDeliveryDate,
    setUnitDeliveryDate,
    previousSector,
    setPreviousSector,
    transferDate,
    setTransferDate,
    destinationLocation,
    setDestinationLocation,
  } = useEditContext()

  function handleSave(e) {
    e.preventDefault()

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

    api
      .put(`/patrimony/${id}`, patrimonys)
      .then(navigate("/"))
      .catch((error) => {
        alert(`Erro ao Editar o Patrimônio - ${error}`)
      })
  }

  return (
    <>
      <div className="main formRgt">
        <h1>Editar Patrimônio</h1>
        <hr />

        <Form className="form">
          <FormGroup className="mb-3" controlId="formSector">
            <Form.Label>Setor:</Form.Label>
            <Form.Control
              type="texte"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup className="mb-3" controlId="formNumberPatrimony">
            <Form.Label>Número do Patrimônio:</Form.Label>
            <Form.Control
              type="number"
              value={numberPatrimony}
              onChange={(e) => setNumberPatrimony(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup className="mb-3" controlId="formDescription">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup className="mb-3" controlId="formUnitDeliveryDate">
            <Form.Label>Data de Entrega na Unidade:</Form.Label>
            <Form.Control
              type="text"
              value={unitDeliveryDate}
              onChange={(e) => setUnitDeliveryDate(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup className="mb-3" controlId="formPreviousSector">
            <Form.Label>Setor Anterior:</Form.Label>
            <Form.Control
              type="text"
              value={previousSector || ""}
              onChange={(e) => setPreviousSector(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="mb-3" controlId="formTransferDate">
            <Form.Label>Data de Transferência:</Form.Label>
            <Form.Control
              type="text"
              value={transferDate || ""}
              onChange={(e) => setTransferDate(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="mb-3" controlId="formDestinationLocation">
            <Form.Label>Localização de Destino:</Form.Label>
            <Form.Control
              type="text"
              value={destinationLocation || ""}
              onChange={(e) => setDestinationLocation(e.target.value)}
            />
          </FormGroup>

          <Button
            className="mt-5"
            variant="outline-success"
            size="lg"
            type="submit"
            onClick={handleSave}
          >
            Salvar
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Edit
