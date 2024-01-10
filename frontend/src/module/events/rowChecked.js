import { urlPatrimony } from "../elements/Elements.js"

async function rowChecked() {
  try {
    const response = await fetch(urlPatrimony)

    if (!response.ok) {
      throw Error("Não foi possível obter as informações!")
    }

    const patrimoniesApiResults = await response.json()

    let elemento = patrimoniesApiResults.map((id) => {
      return id._id
    })

    for (let idElemento in elemento) {
      let idList = `${elemento[idElemento]}`

      let inputChecked = document.getElementById(`${idList}`)
      let tr = document.querySelector(`[data-id="${idList}"]`)

      inputChecked.addEventListener("change", () => {
        inputChecked.checked
          ? tr.classList.add("table-success")
          : tr.classList.remove("table-success")
      })
    }
  } catch (error) {
    console.log("Algo de erado: ", error)
  }
}

export default rowChecked
