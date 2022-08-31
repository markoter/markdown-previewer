import React from "react";

const EditorBox = () => {
    return (
        <div id="editorBox">
            <label for="editor">Editor</label>
            <textarea id="editor" name="editor" rows={4} cols="50" >
                default textarea text
            </textarea>
        </div>

    )
}

export default EditorBox