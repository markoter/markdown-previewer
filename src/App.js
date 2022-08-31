import React from "react";
import EditorBox from "./Editor";
import HeaderBox from "./Header";
import PreviewBox from "./Preview";

class App extends React.Component {
    render() {
        return (
            <div id="app-container">
                <HeaderBox />
                <p>this is just app</p>
                <EditorBox />
                <PreviewBox />
            </div>

        )
    }
}

export default App