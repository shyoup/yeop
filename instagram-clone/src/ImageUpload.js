import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import firebase from 'firebase';
import { storage, db } from './firebase';
import './ImageUpload.css';

function ImageUpload({username}) {
    const [imageList, setImageList] = useState([]);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');
    // const [imageUrlList, setImageUrlList] = useState([]);
    let imageUrlList = [];
    
    const handleChange = (e) => {
        if(e.target.files.length > 0) {
            setImageList(e.target.files);
        }
    };

    const updatePostDB = async () => {
        if (imageUrlList.length === imageList.length) {
            const date = new Date();
            db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                timeStr: date.toString(),
                caption: caption,
                imageUrl: imageUrlList,
                username: username
            });
            setProgress(0);
            setCaption("");
            setImageList([]);
            imageUrlList = [];
            document.getElementById("post_input").value = null;
            document.getElementById("file_input").value = null;
        }
    }

    const uploadImage = async () => {
        for (let i=0; i<imageList.length; i++) {
            const image = imageList[i];
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            const url = await storage.ref("images").child(image.name).getDownloadURL();
            imageUrlList.push(url);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // progress function ...
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                (error) => {
                    // error function;
                    console.log(error);
                    alert(error.message);
                }
            )
        }
    }

    const handleUpload = async () => {
        await uploadImage();
        updatePostDB();
    }

    return (
        <div className="imageupload">
            <progress className="imageupload__progress" value={progress} max="100" />
            <input id="post_input" type="text" placeholder='Enter a caption...' onChange={event => setCaption(event.target.value)}/>
            <input id="file_input" type="file" onChange={handleChange} multiple />
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}

export default ImageUpload
