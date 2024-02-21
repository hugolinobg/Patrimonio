import {
  urlPatrimony,
  modalId,
  modalInputSector,
  modalInputNumberPatrimony,
  modalInputDescription,
  modalInputUnitDeliveryDate,
  modalInputPreviousSector,
  modalInputTransferDate,
  modalInputDestinationLocation,
  btnUpdate,
} from "../elements/Elements.js"

btnUpdate.addEventListener("click", updateRegister)

function updateRegister(e) {
  e.preventDefault()
  //capturar dados do formulário
  const data = getDataForm()

  //enviar os dados para api
  submitDataApi(data)
}

function getDataForm() {
  if (
    modalInputSector.value === "" ||
    modalInputNumberPatrimony.value === "" ||
    modalInputDescription.value === "" ||
    modalInputUnitDeliveryDate.value === "" ||
    modalInputPreviousSector.value === ""
  ) {
    alert("Preencha todos os campos!")
    return
  }

  let dateUnitDelivery = new Date(modalInputUnitDeliveryDate.value)
  let dateTransfer = new Date(modalInputTransferDate.value)

  let dateUnitDeliveryPtBr = dateUnitDelivery.toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  })
  let dateTransferPtBr = dateTransfer.toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  })

  const dataForm = {
    sector: modalInputSector.value,
    numberPatrimony: modalInputNumberPatrimony.value,
    description: modalInputDescription.value,
    unitDeliveryDate: dateUnitDeliveryPtBr,
    previousSector: modalInputPreviousSector.value,
    transferDate: dateTransferPtBr,
    destinationLocation: modalInputDestinationLocation.value,
  }

  return dataForm
}

async function submitDataApi(dataForm) {
  try {
    const res = await fetch(`${urlPatrimony}/:${modalId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),
    })

    if (res.status === 201) {
      alert("Cadastro atualizado consucesso!")

      setTimeout(() => {
        window.location.href = "home.html"
      }, "700")
    } else {
      alert("Erro na hora de atualizado o cadastro!")
    }
  } catch (erro) {
    console.log(erro)
  }
}

// function clearField() {
//   inputSector.value = ""
//   inputNumberPatrimony.value = ""
//   inputDescription.value = ""
//   inputUnitDeliveryDate.value = ""
//   inputPreviousSector.value = ""
//   inputTransferDate.value = ""
//   inputDestinationLocation.value = ""
// }
