// import { urlPatrimony } from "../elements/Elements.js"

document.addEventListener("DOMContentLoaded", rowChecked)

function rowChecked() {
  // Load checkbox status from localStorage on page load
  loadCheckboxStatus()

  // Add click event listener to the table
  document
    .getElementById("myTable")
    .addEventListener("change", function (event) {
      if (event.target.type === "checkbox") {
        // Toggle the class on the parent row when the checkbox is clicked
        event.target.closest("tr").classList.toggle("table-success")

        // Save checkbox status to localStorage
        saveCheckboxStatus()
      }
    })
}

function saveCheckboxStatus() {
  // Get all checkboxes and their status
  const checkboxes = document.querySelectorAll(
    "#myTable tbody input[type=checkbox]"
  )
  const checkboxStatus = {}

  checkboxes.forEach((checkbox, index) => {
    checkboxStatus[index] = checkbox.checked
  })

  // Save checkbox status to localStorage
  localStorage.setItem("checkboxStatus", JSON.stringify(checkboxStatus))
}

function loadCheckboxStatus() {
  // Load checkbox status from localStorage
  const checkboxStatus =
    JSON.parse(localStorage.getItem("checkboxStatus")) || {}

  // Apply the status to the checkboxes
  for (const index in checkboxStatus) {
    if (checkboxStatus.hasOwnProperty(index)) {
      const checkbox = document.querySelectorAll(
        "#myTable tbody input[type=checkbox]"
      )[index]
      if (checkbox) {
        checkbox.checked = checkboxStatus[index]
        if (checkboxStatus[index]) {
          checkbox.closest("tr").classList.add("table-success")
        }
      }
    }
  }
}

// // async function rowChecked() {
// //   try {
// //     const response = await fetch(urlPatrimony)

// //     if (!response.ok) {
// //       throw Error("Não foi possível obter as informações!")
// //     }

// //     const patrimoniesApiResults = await response.json()

// //     let elemento = patrimoniesApiResults.map((id) => {
// //       return id._id
// //     })

// //     for (let idElemento in elemento) {
// //       let idList = `${elemento[idElemento]}`

// //       // let inputChecked = document.getElementById(`${idList}`)
// //       let inputChecked = document.querySelector(`[data-checked="${idList}"]`)

// //       let tr = document.getElementById(`${idList}`)

// //       let inputCheckedStorage = ""
// //       inputChecked.addEventListener("change", () => {
// //         localStorage.setItem(inputChecked.id, inputChecked.checked)

// //         inputCheckedStorage = JSON.parse(localStorage.getItem(inputChecked.id))

// //         inputCheckedStorage === inputChecked.checked
// //           ? tr.classList.add("table-success")
// //           : tr.classList.remove("table-success")
// //       })

// //       // inputChecked.addEventListener("change", () => {
// //       //   localStorage.setItem(
// //       //     JSON.stringify(inputChecked.id),
// //       //     JSON.stringify(inputChecked.checked)
// //       //   )

// //       //   inputChecked.checked
// //       //     ? tr.classList.add("table-success")
// //       //     : tr.classList.remove("table-success")
// //       // })
// //     }
// //   } catch (error) {
// //     console.log("Algo de erado: ", error)
// //   }
// // }

export default rowChecked
