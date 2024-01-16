import { inputSearch, tableLists } from "../elements/Elements.js"

inputSearch.addEventListener("keyup", search)

function search() {
  let inputSearchValue = inputSearch.value.toLowerCase()
  let listsTr = tableLists.getElementsByTagName("tr")

  if (inputSearchValue.length <= 2) {
    return
  }

  for (let position in listsTr) {
    if (true === isNaN(position)) {
      continue
    }

    let contentLineTd = listsTr[position].innerText.toLowerCase()

    true === contentLineTd.includes(inputSearchValue)
      ? (listsTr[position].style.display = "")
      : (listsTr[position].style.display = "none")
  }
}

export default search
