// import { marked } from "marked";
import React from "react";
import Markdown from "marked-react";

const PreviewBox = (props) => {
    const { textContent } = props
    return (
        <div id="previewBox" className="textBox">
            <label for="preview">Preview</label>
            <br />
            <div id="preview" className="textarea">
                <Markdown>
                    {textContent}
                </Markdown>
            </div>


        </div>
        // <div id="previewBox" className="textBox">
        //     <label for="preview">Preview</label>
        //     <br />
        //     <textarea 
        //     id="preview" 
        //     name="preview" 
        //     rows={4} 
        //     cols="50"
        //     value={textContent} />
        // </div>

    )
}

export default PreviewBox