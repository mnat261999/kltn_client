import React, { useState } from 'react'
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GLOBALTYPES } from '../redux/actions/globalTypes';
import axios from 'axios';

const StatusModal = () => {
    const { auth, status, theme } = useSelector(state => state)
    const [visible, setVisible] = useState(status)
    const dispatch = useDispatch()
    const [content, setContent] = useState('')
    const [medias, setMedias] = useState([])
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
        console.log(newMedias)
        setMedias([...medias, ...newMedias])
        console.log(medias)
    }

    const deleteImages = (index) => {
        const newArr = [...medias]
        newArr.splice(index, 1)
        setMedias(newArr)
    }


    return (
        <div className="status_modal">
            <Modal title="Create Post"
                visible={visible}
                onCancel={() => dispatch({ type: GLOBALTYPES.STATUS, payload: false })}
                footer={[
                    <div className="status_footer">
                        <button className="btn btn-secondary w-100" type="submit" style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }} /* onClick={handleSubmit} */>
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
                                medias.map((m, index) => (
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