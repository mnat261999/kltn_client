import React, { useState } from 'react'
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GLOBALTYPES } from '../redux/actions/globalTypes';

const StatusModal = () => {
    const { auth, status, theme } = useSelector(state => state)
    const [visible, setVisible] = useState(status)
    const dispatch = useDispatch()
    const [content, setContent] = useState('')
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


{/*                         <div className="show_images">
                            {
                                images.map((img, index) => (
                                    img.typeMedia == 'image' &&
                                    <div key={index} id="file_img">
                                        <img src={img.media.url} alt="images" class="img-thumbnail" style={{ filter: `${theme ? 'invert(1)' : 'invert(0)'}` }} />
                                        <span onClick={() => deleteImages(index)}>&times; </span>
                                    </div>
                                    || img.typeMedia == 'video' &&
                                    <div key={index} id="file_img">
                                        <video controls src={img.media.url} alt="images" class="img-thumbnail" style={{ filter: `${theme ? 'invert(1)' : 'invert(0)'}` }} />
                                        <span onClick={() => deleteImages(index)}>&times; </span>
                                    </div>
                                ))
                            }
                        </div> */}


                        <div className="input_images">
                            <div className="file_upload">
                                <i className="fas fa-image" />
                                <input type="file" name="file" id="file"
                                    multiple accept="image/*,video/*" /* onChange={handleChangeImages} */ />
                            </div>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default StatusModal