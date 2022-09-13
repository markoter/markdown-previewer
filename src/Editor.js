import React from "react";

const EditorBox = (props) => {
    const { textContent } = props
    const {handleTextChange} = props
    return (
        <div id="editorBox" className="textBox">
            <label for="editor">Editor</label>
            <br />
            <textarea
                id="editor"
                name="editor"
                className="textarea"
                rows={30}
                cols="50" 
                value={textContent}
                onChange={handleTextChange} />
        </div>

    )
}

export default EditorBox