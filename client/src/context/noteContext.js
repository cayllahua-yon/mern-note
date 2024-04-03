import { createContext, useContext, useState } from "react"
// importar conexion mediante axios.

const noteContext = createContext();
// creamos un Hook para usar ese contexto
export const useNotes = () => {
    const context = useContext(noteContext);
    return context
}

export const NoteProvider = ({children}) => {
    // console.log("contenedor general")
    const [notes, setNotes] = useState([]);



    console.log(setNotes)
    // crear las funciones de consulta como get put delete create
    return <noteContext.Provider value={{notes}}>
        {children}
    </noteContext.Provider>
 }