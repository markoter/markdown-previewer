import React from "react";
import EditorBox from "./Editor";
import HeaderBox from "./Header";
import PreviewBox from "./Preview";

class App extends React.Component {
    state = {
        text: ""
    }

    handleTextChange = event => {
        
    }
    render() {
        const { text } = this.state
        return (
            <div id="app-container">
                <HeaderBox />
                <div id="content">
                    <EditorBox />
                    <PreviewBox text={text} writeText={this.writeText} />
                </div>

            </div>

        )
    }
}

export default App