import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
    cloud_name: "dohtwzyb0",
    api_key: "577625872466897",
    api_secret: "7bUPpbZ4E3ZL56QxiRP9AV_KbVY"
})

export const uploaderImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'notes'
    })
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}