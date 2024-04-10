import toast from "react-hot-toast"
import {useNotes} from "../context/noteContext"
import {useNavigate} from "react-router-dom"

export function NoteCard({note}){

    const {deleteNote} = useNotes();
    const navigate= useNavigate();

    const handleDelete = (id) => {
        toast((t) => (
            <div>
                <p className="text-white">Estas seguro de eliminar? <strong>{ id }</strong></p>
                <div>
                    <button onClick={()=> { 
                        deleteNote(id);
                        toast.dismiss(t.id)
                    }} className="bg-red-500 hover:bg-red-400 px-3 py-2 text-white rounded-sm mx-2 ">Eliminar</button>
                    <button onClick={() => toast.dismiss(t.id)} className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2" >cancelar</button>
                </div>

            </div>
        ), { 
            style: {
                background: "#202020"
            }
        });
    }

    return (
        <div className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer">
            <div className="px-4 py-7">
                <div className="flex justify-between">
                    <h3> {note.title  }</h3>
                    {/* En handleDelete (e) => {e.stopPropagation()} */}
                    <button onClick={() => handleDelete(note._id)} className="bg-red-600 text-sm px-1 rounded-sm">
                        Eliminar
                    </button>
                </div>
                <div className="flex justify-between mt-2">
                <p>{note.description  } </p>  
                <button onClick={() => navigate(`/edit/${note._id}`)} className="bg-blue-600 text-sm px-1 rounded-sm">
                        Editar
                    </button>
                </div>
                
            </div>          
                { note.image && <img src={note.image.url} className="w-full object-cover  h-36"/> }
        </div>
    )
} 