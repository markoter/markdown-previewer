import React from "react";
import EditorBox from "./Editor";
import HeaderBox from "./Header";
import PreviewBox from "./Preview";

class App extends React.Component {
    render() {
        return (
            <div id="app-container">
                <HeaderBox />
                <div id="content">
                    <EditorBox />
                    <PreviewBox />
                </div>

            </div>

        )
    }
}

export default App