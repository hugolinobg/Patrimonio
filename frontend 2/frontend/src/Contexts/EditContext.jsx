import { createContext, useState } from "react"

const EditContext = createContext()

function EditProvider(PropsType) {
  const [edititem, setEdititem] = useState([])

  const [id, setId] = useState("")
  const [sector, setSector] = useState("")
  const [numberPatrimony, setNumberPatrimony] = useState("")
  const [description, setDescription] = useState("")
  const [unitDeliveryDate, setUnitDeliveryDate] = useState("")
  const [previousSector, setPreviousSector] = useState("")
  const [transferDate, setTransferDate] = useState("")
  const [destinationLocation, setDestinationLocation] = useState("")



  return (
    <EditContext.Provider
      value={{
        edititem,
        setEdititem,
        id,
        setId,
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
      }}
    >
      {PropsType.children}
    </EditContext.Provider>
  )
}

export { EditContext, EditProvider }
