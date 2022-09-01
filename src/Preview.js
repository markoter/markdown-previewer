import React from "react";

const PreviewBox = () => {
    return (
        <div id="previewBox" className="textBox">
            <label for="preview">Preview</label>
            <br />
            <textarea id="preview" name="preview" rows={4} cols="50" >
                default preview textarea text
            </textarea>
        </div>

    )
}

export default PreviewBox