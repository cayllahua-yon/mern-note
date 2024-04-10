import axios from "axios"

export const getNotesRequests = async () => await axios.get('/api/notes');

export const createNoteRequest = async (newNote) => {
    const form = new FormData();
    // transformamos aun formulario
    for(let key in newNote){
        form.append(key, newNote[key]);  
    }

    // await axios.post('/api/note', newNote)
    return await axios.post('/api/note', form, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
}

export const deleteNoteRequest = async (id) => await axios.delete(`/api/note/${id}`)
export const getNoteRequest = async (id) => await axios.get(`/api/note/${id}`)
// export const updateNoteRequest = async (id, newNote) => await axios.put(`/api/note/${id}`, newNote)
export const updateNoteRequest = async (id, newNote) => {
    const form = new FormData();

    for(let key in newNote){
        form.append(key, newNote[key]);
    }

    return await axios.put(`/api/note/${id}`, form, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
}