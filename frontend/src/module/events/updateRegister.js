import { urlPatrimony } from "../elements/Elements.js"

// function getDataForm() {
//   const inputName = document.querySelector("#name")
//   const inputEmail = document.querySelector("#email")
//   const inputPassword = document.querySelector("#password")
//   const confirmationPassword = document.querySelector("#passwordConf")

//   if (
//     inputName.value === "" ||
//     inputEmail.value === "" ||
//     inputPassword.value === "" ||
//     confirmationPassword.value === ""
//   ) {
//     alert("Preencha todos os campos!")
//     return
//   }

//   if (inputPassword.value !== confirmationPassword.value) {
//     alert("Senha não conferem!")
//     return
//   }

//   const dataForm = {
//     name: inputName.value,
//     email: inputEmail.value,
//     password: inputPassword.value,
//   }

//   return dataForm
// }

async function updateRegister() {
  try {
    const response = await fetch(urlPatrimony)

    if (!response.ok) {
      throw Error("Não foi possível obter as informações!")
    }

    const patrimoniesApiResults = await response.json()

    let elemento = patrimoniesApiResults.map((id) => {
      return id._id
    })

    let getData = []

    for (let idElemento in elemento) {
      let idList = `${elemento[idElemento]}`

      let id = document.getElementById(`${idList}`)
      let sector = document.querySelector(`[data-sector="${idList}"]`)
      let numberPatrimony = document.querySelector(
        `[data-numberPatrimony="${idList}"]`
      )
      let description = document.querySelector(`[data-description="${idList}"]`)
      let unitDeliveryDate = document.querySelector(
        `[data-unitDeliveryDate="${idList}"]`
      )
      let previousSector = document.querySelector(
        `[data-previousSector="${idList}"]`
      )
      let destinationLocation = document.querySelector(
        `[data-destinationLocation="${idList}"]`
      )
      let transferDate = document.querySelector(
        `[data-transferDate="${idList}"]`
      )

      let dataForm = {
        id: id.id,
        sector: sector.innerText,
        numberPatrimony: numberPatrimony.innerText,
        description: description.innerText,
        unitDeliveryDate: unitDeliveryDate.innerText,
        previousSector: previousSector.innerText,
        destinationLocation: destinationLocation.innerText,
        transferDate: transferDate.innerText,
      }

      getData = dataForm
    }
    
    return getData
  } catch (error) {
    console.log("Algo de erado: ", error)
  }
}

export default updateRegister
