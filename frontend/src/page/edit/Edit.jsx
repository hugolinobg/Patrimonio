import { useNavigate, Link } from "react-router-dom"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import FormGroup from "react-bootstrap/esm/FormGroup"
import useEditContext from "../../hook/useEditContext"
import Api from "../../services/api"
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

  const handleSave = (e) => {
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

    Api.put(`/patrimony/${id}`, data)
      .then(navigate("/home"))
      .catch((error) => {
        alert(`Erro ao Editar o Patrimônio - ${error.response.data}`)
      })
  }

  return (
    <div className="main">
      <div className="formRgt">
        <Link className="linkBtn" to="/home">
          Voltar
        </Link>
        <h1>Editar Patrimônio</h1>
        <hr />

        <Form className="form">
          <FormGroup className="mb-3">
            <Form.Label>Setor:</Form.Label>
            <Form.Control
              type="texte"
              value={sector}
              onChange={(e) => setSector(e.target.value.toLowerCase())}
              required
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Form.Label>Número do Patrimônio:</Form.Label>
            <Form.Control
              type="number"
              value={numberPatrimony}
              onChange={(e) => setNumberPatrimony(e.target.valueAsNumber)}
              required
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value.toLowerCase())}
              required
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Form.Label>Data de Entrega na Unidade:</Form.Label>
            <Form.Control
              type="text"
              value={unitDeliveryDate}
              onChange={(e) => setUnitDeliveryDate(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Form.Label>Setor Anterior:</Form.Label>
            <Form.Control
              type="text"
              value={previousSector || ""}
              onChange={(e) => setPreviousSector(e.target.value.toLowerCase())}
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Form.Label>Data de Transferência:</Form.Label>
            <Form.Control
              type="text"
              value={transferDate || ""}
              onChange={(e) => setTransferDate(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Form.Label>Localização de Destino:</Form.Label>
            <Form.Control
              type="text"
              value={destinationLocation || ""}
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
            onClick={handleSave}
          >
            Salvar
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Edit
