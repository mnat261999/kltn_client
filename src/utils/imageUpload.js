import axios from "axios";


export const checkImage = (file) => {
    let err = ""
    if(!file) return err = "File does not exist."

    if(file.size > 1024 * 1024) // 1mb
    err = "The largest image size is 1mb."

    if(file.type !== 'image/jpeg' && file.type !== 'image/png' )
    err = "Image format is incorrect."
    return err;
}


export const imageUpload = async (auth, images) => {
    console.log(images)
    // for(const item of images){
    //     const formData = new FormData()

    //     if(item.camera){
    //         formData.append("file", item.camera)
    //     }else{
    //         formData.append("file", item)
    //     }

    //     const res = await axios.get(`/api/avatar/update`, {
    //         headers: { Authorization: auth.token },
    //         body: formData
    //     })
    //     return res;
    // }
}