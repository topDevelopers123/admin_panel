import React, { useState } from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import shortid from "https://cdn.skypack.dev/shortid@2.2.16";

const Upload = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [files, setFiles] = useState([]);

    const fileSize = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    const handleInputChange = (e) => {
        let images = [];
        for (let i = 0; i < e.target.files.length; i++) {
            images.push(e.target.files[i]);
            let reader = new FileReader();
            let file = e.target.files[i];
            reader.onloadend = () => {
                setSelectedFiles((prevValue) => [
                    ...prevValue,
                    {
                        id: shortid.generate(),
                        filename: e.target.files[i].name,
                        filetype: e.target.files[i].type,
                        fileimage: reader.result,
                        datetime: e.target.files[i].lastModifiedDate.toLocaleString('en-IN'),
                        filesize: fileSize(e.target.files[i].size)
                    }
                ]);
            }
            if (e.target.files[i]) {
                reader.readAsDataURL(file);
            }
        }
    }

    const deleteSelectedFile = (id) => {
        if (window.confirm("Are you sure you want to delete this Image?")) {
            const result = selectedFiles.filter((data) => data.id !== id);
            setSelectedFiles(result);
        }
    }

    const handleFileUploadSubmit = async (e) => {
        e.preventDefault();

        e.target.reset();
        if (selectedFiles.length > 0) {
            for (let index = 0; index < selectedFiles.length; index++) {
                setFiles((prevValue) => [
                    ...prevValue,
                    selectedFiles[index]
                ]);
            }
            setSelectedFiles([]);
        } else {
            alert('Please select file');
        }
    }

    const deleteFile = async (id) => {
        if (window.confirm("Are you sure you want to delete this Image?")) {
            const result = files.filter((data) => data.id !== id);
            setFiles(result);
        }
    }

    return (
        <div className="fileupload-view">
            <div className="row justify-content-center m-0">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <div className="kb-data-box">
                                <div className="kb-modal-data-title">
                                    <div className="kb-data-title">
                                        <h6>Multiple File Upload With Preview</h6>
                                    </div>
                                </div>
                                <form onSubmit={handleFileUploadSubmit}>
                                    <div className="kb-file-upload">
                                        <div className="file-upload-box">
                                            <input type="file" id="fileupload" className="file-upload-input" onChange={handleInputChange} multiple />
                                            <span>Drag and drop or <span className="file-link">Choose your files</span></span>
                                        </div>
                                    </div>
                                    <div className="kb-attach-box mb-3">
                                        {selectedFiles.map((data, index) => {
                                            const { id, filename, fileimage, datetime, filesize } = data;
                                            return (
                                                <div className="file-atc-box" key={id}>
                                                    {filename.match(/\.(jpg|jpeg|png|gif|svg)$/i) ?
                                                        <div className="file-image">
                                                            <img src={fileimage} alt="" />
                                                        </div> :
                                                        <div className="file-image">
                                                            <i className="far fa-file-alt"></i>
                                                        </div>
                                                    }
                                                    <div className="file-detail">
                                                        <h6>{filename}</h6>
                                                        <p><span>Size : {filesize}</span><span className="ml-2">Modified Time : {datetime}</span></p>
                                                        <div className="file-actions">
                                                            <button type="button" className="file-action-btn" onClick={() => deleteSelectedFile(id)}>Delete</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="kb-buttons-box">
                                        <button type="submit" className="btn btn-primary form-submit">Upload</button>
                                    </div>
                                </form>
                                {files.length > 0 && (
                                    <div className="kb-attach-box">
                                        <hr />
                                        {files.map((data, index) => {
                                            const { id, filename, fileimage, datetime, filesize } = data;
                                            return (
                                                <div className="file-atc-box" key={index}>
                                                    {filename.match(/\.(jpg|jpeg|png|gif|svg)$/i) ?
                                                        <div className="file-image">
                                                            <img src={fileimage} alt="" />
                                                        </div> :
                                                        <div className="file-image">
                                                            <i className="far fa-file-alt"></i>
                                                        </div>
                                                    }
                                                    <div className="file-detail">
                                                        <h6>{filename}</h6>
                                                        <p><span>Size : {filesize}</span><span className="ml-3">Modified Time : {datetime}</span></p>
                                                        <div className="file-actions">
                                                            <button className="file-action-btn" onClick={() => deleteFile(id)}>Delete</button>
                                                            <a href={fileimage} className="file-action-btn" download={filename}>Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;
