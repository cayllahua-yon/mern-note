import {Formik, Form, Field, ErrorMessage} from "formik"
import {useNotes} from "../context/noteContext"
import {useNavigate, useParams, Link} from "react-router-dom"
import * as Yup from "yup"
import { useEffect, useState } from "react";
import {AiOutlineLoading3Quarters } from "react-icons/ai"

export function NoteForm() {
    const {createNote, getNote, updateNote} = useNotes();
    const navigate = useNavigate();
    const params = useParams();
    const [note, setNote] = useState({title:"", description: "", image: null, copyPublicId: ""});
    // async function oneNote() {
    //     const result = await getNote(params.id)
    //     setNote(result)
    // }


    useEffect( ()=>{
        // (()=>{})(); // para ejecutar un codigo anonimo inmediatamente - braper
        (async ()=>{
            if(params.id){
                const result = await getNote(params.id)
                setNote(result)
            }            
        })();
        // if (params.id) {
        //     oneNote()
        // }
    }, [params.id])


    return (
        <div className="flex items-center justify-center "> 
            <div className="bg-zinc-400 p-10 shadow-md shadow-black m-2" >
                <header className="flex justify-center">
                    {
                        params.id ?  <h3 className="text-xl font-bold text-black">Actualizando nota</h3> : <h3 className="text-xl font-bold text-black">Creando nota</h3>                       
                    }                    
                </header>
                <Formik 
                        // initialValues={{title: "", description: ""}} 
                        initialValues={note} 
                        validationSchema={Yup.object({
                            title: Yup.string().required("El titulo se requiere"),
                            description: Yup.string().required("La descripcion se requiere")
                        })}
                        onSubmit={async (values, actions) =>{                            
                            // console.log(values) 
                            if (params.id) {
                                await updateNote(params.id, values)
                            } else {
                                await createNote(values);
                            }
                            
                            actions.setSubmitting(false); // para cuando usamos isSubmitting
                            navigate("/")
                            
                        }}
                        // enableReinitialize = {true}
                        enableReinitialize
                >
                    {
                        ({handleSubmit, setFieldValue, isSubmitting}) => (
                            <Form onSubmit={handleSubmit}  className="block">
                                <label htmlFor="title" className="text-sm block font-bold text-black w-full mt-2">Titulo</label>
                                <Field name="title" placeholder="Titulo" className="mt-2 px-2 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"></Field>
                                <ErrorMessage component={"p"} className="text-red-400 text-sm" name="title" />
                                
                                <label htmlFor="description" className="text-sm block font-bold text-black w-full mt-2">Descripción</label>                            
                                <Field component="textarea"  name="description" placeholder="Descripción" className="mt-2 px-2 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"></Field>
                                <ErrorMessage component={"p"} className="text-red-400 text-sm" name="description" />
                                
                                <input onChange={(e) => setFieldValue('image', e.target.files[0])} type="file" name="image"  className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full cursor-pointer"/>

                                <div className="flex justify-between">
                                    <button type="submit" disabled={isSubmitting} className="bg-green-600 hover:bg-green-500 cursor-pointer rounded-md px-3 py-2 text-white my-2">
                                        { isSubmitting ? (<AiOutlineLoading3Quarters className="animate-spin h-5 w-5"/>) : "Guardar" }
                                    </button>
                                    <Link to={"/"} className="bg-blue-500 hover:bg-blue-400 cursor-pointer rounded-md px-3 py-2 text-white my-2">Cancelar</Link>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}

// export default NoteForm