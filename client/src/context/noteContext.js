import { createContext, useContext, useState, useEffect } from "react"
// importar conexion mediante axios.
import {getNotesRequests, createNoteRequest, deleteNoteRequest , getNoteRequest, updateNoteRequest} from "../api/notes.api"


const noteContext = createContext();
// creamos un Hook para usar ese contexto
export const useNotes = () => {
    const context = useContext(noteContext);
    return context
}

export const NoteProvider = ({children}) => {
    // console.log("contenedor general")
    const [notes, setNotes] = useState([]);

    const getNotes =  async () => {
        const result = await getNotesRequests();              
        setNotes(result.data)
    }

    useEffect(()=>{
        getNotes();
    }, [])

    const createNote = async (note) => {
            try {
                const result = await createNoteRequest(note)
                // console.log({createContexto: note})
                setNotes([...notes, result.data])
            } catch (error) {
                console.error(error)
            }
    }

    const deleteNote = async (id) => {
        const result = await deleteNoteRequest(id);
        // que pasen todos con el id que no coincide
        if(result.status === 204){
            setNotes( notes.filter((note)=> note._id !== id) )
        }
        //filter
    }

    const getNote = async (id) => {
       const result = await getNoteRequest(id);
       return result.data
    }

    const updateNote = async (id, newDato) => {
        const result = await updateNoteRequest(id, newDato);
        setNotes( notes.map((note) => note._id === id ? result.data : note))
        // console.log(result.data)
    }
    
    // crear las funciones de consulta como get put delete create
    return <noteContext.Provider value={{notes, getNotes, createNote, deleteNote, getNote, updateNote}}>
        {children}
    </noteContext.Provider>
 }