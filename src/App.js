import React from "react";
import EditorBox from "./Editor";
import HeaderBox from "./Header";
import PreviewBox from "./Preview";

const defaultState = `
# This is h1 heading element
## This is h2 subheading element
This is: [link](https://www.freecodecamp.org)
This is inline code: \`<div></div>\`

\`\`\`
// And this is code block:
function anotherExample(A, B) {
  if (A == 0) {
    return B;
  }
}
\`\`\`
- And here there is list.
  - Bulleted.
     - With different indentation levels.
        - That look like this.

> Block Quote!
Some image:

![freeCodeCamp logo](https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/FreeCodeCamp_logo.png/320px-FreeCodeCamp_logo.png "freeCodeCamp logo")

And finally **bold text**
`


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textContent: defaultState
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