import React from "react";
import EditorBox from "./Editor";
import HeaderBox from "./Header";
import PreviewBox from "./Preview";

class App extends React.Component {
    state = {
        textContent: ""
    }

    handleTextChange = event => {
        this.setState({ textContent: event.target.value})
        
    }
    render() {
        const { textContent } = this.state
        return (
            <div id="app-container">
                <HeaderBox />
                <div id="content">
                    <EditorBox textContent={textContent} handleTextChange={this.handleTextChange}/>
                    <PreviewBox textContent={textContent}/>
                </div>

            </div>

        )
    }
}

export default App