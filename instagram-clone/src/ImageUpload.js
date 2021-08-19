import React, { useState } from 'react'

function ImageUpload() {
    const [caption, setCaption] = useState('');
    return (
        <div>
            {/* I want to have... */}
            {/* caption input  */}
            {/*  file picker */}
            {/*  Post button */}
            <input type="text" placeholder='Enter a caption...' onChange={event => setCaption(event.target.value)}/>
            <input type="file" onChange={handleChange}/>
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}

export default ImageUpload
