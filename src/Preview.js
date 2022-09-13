import React from "react";

const PreviewBox = (props) => {
    const {textContent} = props
    return (
        <div id="previewBox" className="textBox">
            <label for="preview">Preview</label>
            <br />
            <textarea 
            id="preview" 
            name="preview" 
            rows={4} 
            cols="50" 
            value={textContent}/>
        </div>

    )
}

export default PreviewBox