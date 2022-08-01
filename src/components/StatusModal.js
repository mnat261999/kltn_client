import React, { useEffect, useState } from 'react'
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GLOBALTYPES } from '../redux/actions/globalTypes';
import axios from 'axios';
import { showErrMsg } from '../utils/Notification';
import { createPost, updatePost } from '../redux/actions/postAction';

const StatusModal = () => {
    const { auth, status, theme } = useSelector(state => state)
    const [visible, setVisible] = useState(status)
    const dispatch = useDispatch()
    const [content, setContent] = useState('')
    const [medias, setMedias] = useState([])
    const [mediaIdDeleteList, setMediaIdDeleteList] = useState([])
    const [mediasAfter, setMediasAfter] = useState([])

    useEffect(() => {
      if(status.onEdit){
        setContent(status.content)
        setMedias(status.medias)
      }
    }, [status])
    
    const handleChangeImages = async e => {
        const files = [...e.target.files]
        let newMedias = []
        let after = []
        let err = ""
        let formData = new FormData()


        files.forEach(f => {
            if (f.type !== 'video/mp4' && f.type !== 'image/jpeg' && f.type !== 'image/png') {
                return err = "Media format is incorrect"
            }
            formData.append('files', f)
        })

        const res = await axios.post('/api/upload/media', formData, {
            headers: { 'content-type': 'multipart/form-data', Authorization: `${auth.token}` }
        })

        res.data.data.forEach(m => newMedias.push(m))
        setMedias([...medias, ...newMedias])

        if(status.onEdit == true){
            setMediasAfter([...mediasAfter, ...newMedias])
        }
    }

    const deleteImages = (index,id) => {
        console.log(id)
        const newArr = [...medias]
        newArr.splice(index, 1)
        setMedias(newArr)
        setMediaIdDeleteList([...mediaIdDeleteList,id])
    }

    const handleSubmit = async (e) =>{
        if(status.onEdit == true){
            if(medias.length == 0 && content.length == 0){
                return showErrMsg("error", 'Please add content or media')
            }
            dispatch(updatePost({content,medias,mediaIdDeleteList,auth,status}))
            dispatch({ type: GLOBALTYPES.STATUS, payload: false })
            setVisible(status)
            setMedias([])
        }else{
            if(medias.length == 0 && content.length == 0){
                return showErrMsg("error", 'Please add content or media')
            }
    
            dispatch(createPost({content,medias,auth}))
            dispatch({ type: GLOBALTYPES.STATUS, payload: false })
    
            setVisible(status)
            setMedias([])
            setMediasAfter([])
        }
    }

    const handleCancel = () => {
        dispatch({ type: GLOBALTYPES.STATUS, payload: false })
        setMediaIdDeleteList([])
        setMediasAfter([])
    }

    console.log(mediaIdDeleteList)

    return (
        <div className="status_modal">
            <Modal title="Create Post"
                visible={visible}
                onCancel={() => handleCancel()}
                footer={[
                    <div className="status_footer">
                        <button className="btn btn-secondary w-100" type="submit" style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }} onClick={handleSubmit}>
                            Post
                        </button>
                    </div>
                ]}
            >
                <form>
                    <div className="status_body">
                        <textarea name="content"
                            placeholder={`${auth.user.username}, what are you thinking?`}
                            onChange={e => setContent(e.target.value)}
                            value={content} />


                        <div className="show_images">
                            {
                                status.onEdit == false ? medias.map((m, index) => (
                                    (m.typeMedia == 'image/jpeg' || m.typeMedia == 'image/png') &&
                                    <div key={index} id="file_img">
                                        <img src={m.media.url} alt="images" class="img-thumbnail" style={{ filter: `${theme ? 'invert(1)' : 'invert(0)'}` }} />
                                        <span onClick={() => deleteImages(index)} >&times; </span>
                                    </div>
                                    || m.typeMedia == 'video/mp4' &&
                                    <div key={index} id="file_img">
                                        <video controls src={m.media.url} alt="images" class="img-thumbnail" style={{ filter: `${theme ? 'invert(1)' : 'invert(0)'}` }} />
                                        <span onClick={() => deleteImages(index)}>&times; </span>
                                    </div>
                                )):
                                medias.map((m, index) => (
                                    (m.typeMedia == 'image/jpeg' || m.typeMedia == 'image/png') &&
                                    <div key={m._id} id="file_img">
                                        <img src={m.media.url} alt="images" class="img-thumbnail" style={{ filter: `${theme ? 'invert(1)' : 'invert(0)'}` }} />
                                        <span onClick={() => deleteImages(index,m._id)} >&times; </span>
                                    </div>
                                    || m.typeMedia == 'video/mp4' &&
                                    <div key={m._id} id="file_img">
                                        <video controls src={m.media.url} alt="images" class="img-thumbnail" style={{ filter: `${theme ? 'invert(1)' : 'invert(0)'}` }} />
                                        <span onClick={() => deleteImages(index)}>&times; </span>
                                    </div>
                                ))

                            }
                        </div>


                        <div className="input_images">
                            <div className="file_upload">
                                <i className="fas fa-image" />
                                <input type="file" name="file" id="file"
                                    multiple accept="image/*,video/*" onChange={handleChangeImages} />
                            </div>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default StatusModal