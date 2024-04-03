// import { useContext } from "react"
// import {context} from "../context/noteContext";
// import { Link } from "react-router-dom"
import {useNotes} from "../context/noteContext"

export function HomePage() {

    const { notes} = useNotes();
    // const {notes, setNotes} = useContext(context);
    console.log(notes)
    return (
        <div> 
            Home Page
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