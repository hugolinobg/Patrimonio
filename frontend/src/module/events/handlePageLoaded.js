import { urlPatrimony, tableLists, exampleModal } from "../elements/Elements.js"
import rowChecked from "../events/rowChecked.js"

let list = ""

async function handlePageLoaded() {
  try {
    const response = await fetch(urlPatrimony)

    if (!response.ok) {
      throw Error("Não foi possível obter as informações!")
    }

    const patrimoniesApiResults = await response.json()

    patrimoniesApiResults.forEach((patrimony) => {
      list += `
        <tr id=${patrimony._id}>
              <td data-sector=${patrimony._id}>${
        patrimony.sector === null ? "" : patrimony.sector
      }</td>
              <td data-numberPatrimony=${patrimony._id}>${
        patrimony.numberPatrimony === null ? "" : patrimony.numberPatrimony
      }</td>
              <td data-description=${patrimony._id}>${
        patrimony.description === null ? "" : patrimony.description
      }</td>
              <td data-unitDeliveryDate=${patrimony._id}>${
        patrimony.unitDeliveryDate === null ? "" : patrimony.unitDeliveryDate
      }</td>
              <td data-previousSector=${patrimony._id}>${
        patrimony.previousSector === null ? "" : patrimony.previousSector
      }</td >
              <td data-destinationLocation=${patrimony._id}>${
        patrimony.destinationLocation === null
          ? ""
          : patrimony.destinationLocation
      }</td>
              <td data-transferDate=${patrimony._id}>${
        patrimony.transferDate === null ? "" : patrimony.transferDate
      }</td>
              <td>
                <div class="form-check form-switch">
                  <input data-checked=${patrimony._id} id=${
        patrimony._id
      } class="form-check-input" name="checkbox" type="checkbox" role="switch" 
                  >
                  <label class="form-check-label" for="${patrimony._id}">
                  Verificado</label>
                </div>
              </td>
              <td>
              <button
                type="button"
                onclick="{() => updateRegister({${patrimony}})}"
                class="btn btn-sm btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >Editar</button>
              </td>
        </tr>
      `
    })

    // patrimoniesApiResults.map((patrimony, index) => {
    //   list += `
    //     <tr id=${patrimony._id}>
    //           <td data-sector=${patrimony._id}>${
    //     patrimony.sector === null ? "" : patrimony.sector
    //   }</td>
    //           <td data-numberPatrimony=${patrimony._id}>${
    //     patrimony.numberPatrimony === null ? "" : patrimony.numberPatrimony
    //   }</td>
    //           <td data-description=${patrimony._id}>${
    //     patrimony.description === null ? "" : patrimony.description
    //   }</td>
    //           <td data-unitDeliveryDate=${patrimony._id}>${
    //     patrimony.unitDeliveryDate === null ? "" : patrimony.unitDeliveryDate
    //   }</td>
    //           <td data-previousSector=${patrimony._id}>${
    //     patrimony.previousSector === null ? "" : patrimony.previousSector
    //   }</td >
    //           <td data-destinationLocation=${patrimony._id}>${
    //     patrimony.destinationLocation === null
    //       ? ""
    //       : patrimony.destinationLocation
    //   }</td>
    //           <td data-transferDate=${patrimony._id}>${
    //     patrimony.transferDate === null ? "" : patrimony.transferDate
    //   }</td>
    //           <td>
    //             <div class="form-check form-switch">
    //               <input data-checked=${patrimony._id} id=${
    //     patrimony._id
    //   } class="form-check-input" name="checkbox" type="checkbox" role="switch"
    //               >
    //               <label class="form-check-label" for="${patrimony._id}">
    //               Verificado</label>
    //             </div>
    //           </td>
    //           <td>
    //           <button
    //             type="button"
    //             onclick="{() => updateRegister({${patrimony}})}"
    //             class="btn btn-sm btn-outline-primary"
    //             data-bs-toggle="modal"
    //             data-bs-target="#exampleModal"
    //             data-bs-whatever="@mdo"
    //           >Editar</button>
    //           </td>
    //     </tr>
    //   `
    // })

    rowChecked()
    tableLists.innerHTML = list
  } catch (error) {
    console.log("Algo de erado: ", error)
  }
}

// function updateRegister(patrimony){
//  console.log('oii2')
// }

if (exampleModal) {
  ;(" ")
}
{
  exampleModal.addEventListener("show.bs.modal", (event) => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute("data-bs-whatever")

    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector(".modal-title")
    const modalBodyInput = exampleModal.querySelector(".modal-body input")

    modalTitle.textContent = `Editar Dados ${recipient}`
    modalBodyInput.value = recipient
  })
}

export default handlePageLoaded
