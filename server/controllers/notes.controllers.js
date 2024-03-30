import noteSchema from "../models/notes.models.js";
import {uploaderImage , deleteImage} from "../libs/cloudinaryConexion.js"
import fs from "fs-extra"

export const getNotes = async (req, res) => {
    try {
        // throw new Error("My error")
        const notes = await noteSchema.find()
        if(notes.length === 0) return res.status(204).json({message: "No existe Datos"}) 
        res.send(notes)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const createNote = async (req, res) => {
    try {
        const {title, description} = req.body;
        let image;

        console.log(req.files) // responde null cuando se sube un archivo
        if (req.files.image) {
            const result = await uploaderImage(req.files.image.tempFilePath);
            image = {
                url: result.secure_url,
                public_id: result.public_id
            }
            await fs.remove(req.files.image.tempFilePath);
            console.log(result)
        }

        const newNote = new noteSchema({title, description, image});
        await newNote.save();
        res.json(newNote)
    } catch (error) {
        return res.status(500).json({message: error.message})        
    }
}

export const deleteNote = async (req, res) => {
    try {
        const noteRemoved = await noteSchema.findByIdAndDelete(req.params.id)

        if(!noteRemoved) return res.sendStatus(404);

        if(noteRemoved.image.public_id){
            await deleteImage(noteRemoved.image.public_id)
        }

        return res.sendStatus(204);


    } catch (error) {
        return res.status(500).json({message: error.message})   
    }
}

export const updateNote = async (req, res) => {
    try {
        const resultUpdateNote = await noteSchema.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(resultUpdateNote)
    } catch (error) {
        return res.status(500).json({message: error.message})           
    }
    
}

export const getNote = async (req, res) => {    
    try {
        const resultNote = await noteSchema.findById(req.params.id)
        if(!resultNote) return  res.status(404).json({message: "no existe"});
        res.json(resultNote)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    

}