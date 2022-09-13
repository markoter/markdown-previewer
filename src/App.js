import React from "react";
import EditorBox from "./Editor";
import HeaderBox from "./Header";
import PreviewBox from "./Preview";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textContent: ""
        }
        this.handleTextChange = this.handleTextChange.bind(this)
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