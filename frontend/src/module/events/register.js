import {
  urlPatrimony,
  inputSector,
  inputNumberPatrimony,
  inputDescription,
  inputUnitDeliveryDate,
  inputPreviousSector,
  inputTransferDate,
  inputDestinationLocation,
  btnRegister,
} from "../elements/Elements.js"

btnRegister.addEventListener("click", register)

function register(e) {
  e.preventDefault()
  //capturar dados do formulário
  const data = getDataForm()

  //enviar os dados para api
  submitDataApi(data)
}

function getDataForm() {
  if (
    inputSector.value === "" ||
    inputNumberPatrimony.value === "" ||
    inputDescription.value === "" ||
    inputUnitDeliveryDate.value === ""
  ) {
    alert("Preencha todos os campos!")
    return
  }

  let dateInputUnitDelivery = inputUnitDeliveryDate.value
  let dateInputTransfer = inputTransferDate.value

  let dateUnitDelivery = new Date(dateInputUnitDelivery)
  let dateTransfer = new Date(dateInputTransfer)
  let dateUnitDeliveryPtBr = dateUnitDelivery.toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  })
  let dateTransferPtBr = dateTransfer.toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  })

  const dataForm = {
    sector: inputSector.value,
    numberPatrimony: inputNumberPatrimony.value,
    description: inputDescription.value,
    unitDeliveryDate: dateUnitDeliveryPtBr,
    previousSector: inputPreviousSector.value,
    transferDate: dateTransferPtBr,
    destinationLocation: inputDestinationLocation.value,
  }

  return dataForm
}

async function submitDataApi(dataForm) {
  try {
    const res = await fetch(urlPatrimony, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),
    })

    if (res.status === 201) {
      alert("Cadastro efetuado consucesso!")

      setTimeout(() => {
        clearField()
        window.location.href = "home.html"
      }, "700")
    } else {
      alert("Erro na hora do cadastro!")
    }
  } catch (erro) {
    console.log(erro)
  }
}

function clearField() {
  inputSector.value = ""
  inputNumberPatrimony.value = ""
  inputDescription.value = ""
  inputUnitDeliveryDate.value = ""
  inputPreviousSector.value = ""
  inputTransferDate.value = ""
  inputDestinationLocation.value = ""
}
