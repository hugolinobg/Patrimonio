import {
  urlPatrimony,
  tableLists,
  myTable,
  modalId,
  modalInputSector,
  modalInputNumberPatrimony,
  modalInputDescription,
  modalInputUnitDeliveryDate,
  modalInputPreviousSector,
  modalInputTransferDate,
  modalInputDestinationLocation,
  btnModalUpdateRegister,
} from "../elements/Elements.js"
import rowChecked from "../events/rowChecked.js"
import search from "../events/search.js"

async function handlePageLoaded() {
  try {
    const response = await fetch(urlPatrimony)

    if (!response.ok) {
      throw Error("Não foi possível obter as informações!")
    }

    const patrimoniesApiResults = await response.json()
    let list = ""

    patrimoniesApiResults.forEach((patrimony, index) => {
      list += `
        <tr>
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
              <input id=${patrimony._id} class="form-check-input" 
                type="checkbox" role="switch">
                
              <label class="form-check-label" for="${patrimony._id}">
                Verificado</label>
            </div>
          </td>

          <td>
            <button
              type="button"
              onclick="modalUpdateRegister('[${index}, ${patrimony._id}]')"
              class="btn btn-sm btn-outline-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
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
    search()
  } catch (error) {
    console.log("Algo de erado: ", error)
  }
}

function modalUpdateRegister({ row, id }) {
  // let currentRow = row

  console.log(row, id)
  const table = myTable
  const cells = table.rows[row].cells

  modalId.value = id.innerHTML
  modalInputSector.value = cells[0].innerHTML
  modalInputNumberPatrimony.value = cells[1].innerHTML
  modalInputDescription.value = cells[2].innerHTML
  modalInputUnitDeliveryDate.value = cells[3].innerHTML
  modalInputPreviousSector.value = cells[4].innerHTML
  modalInputTransferDate.value = cells[5].innerHTML
  modalInputDestinationLocation.value = cells[6].innerHTML
}

export default handlePageLoaded
