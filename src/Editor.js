import React from "react";

const EditorBox = () => {
    return (
        <div id="editorBox" className="textBox">
            <label for="editor">Editor</label>
            <br />
            <textarea id="editor" name="editor" rows={4} cols="50" >
                default textarea text
            </textarea>
        </div>

    )
}

export default EditorBox