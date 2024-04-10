// import { useContext } from "react"
// import {context} from "../context/noteContext";
// import { Link } from "react-router-dom"
import { VscEmptyWindow } from "react-icons/vsc";
import {useNotes} from "../context/noteContext";
import {Link} from "react-router-dom"
import {NoteCard} from "../components/NoteCard"

export function HomePage() {

    const { notes} = useNotes();
    // const {notes, setNotes} = useContext(context);
    // console.log(getNotes)
    console.log(notes)
    
    if(notes.length === 0) return (
        <div className="flex flex-col justify-center items-center">
            <VscEmptyWindow className="w-24 h-24 text-white " />
            <h1 className="text-white text-xl">No existe Notas para mostrar</h1>
        </div>
    )

    return (
        <div> 
            <header className="flex justify-between py-2">
                <Link to={"/new"} className="text-blue-600 text-2xl ">Crear Nota</Link>
                <h2 className="text-xl  text-white font-bold"> # de Notas - {notes.length} </h2>
            </header>
            <br/>
            <div className="grid grid-cols-3 gap-2">
            {
                notes.map((note)=>(
                    // <div key={note._id}>
                    //     {note.title} 
                    // </div>
                    <NoteCard note={note} key={note._id} />
                ))
            }
            </div>
        </div>
    )
}

// export default HomePage

//  <Link to={"/new"}>
//             new
//             </Link>
//             <button className="bg-red-800" onClick={()=>setNotes([1,2,3]) }>
//                 boton añadir 
//             </button> 