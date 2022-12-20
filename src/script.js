import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer()

function Markdown() {
    const [text, setText] = React.useState("" +
        "# Welcome to Teo's React Markdown Previewer!\n" +
        "## This is a sub-heading...\n" +
        "### And here's some other cool stuff:\n\n" +
        "Heres some code, `<div></div>`, between 2 backticks.\n\n```\n/ " +
        "this is multi-line code:\n\n function anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    " +
        "return multiLineCode;\n  }\n}\n```\n\n" +
        "You can also make text **bold**... whoa!\n" +
        "Or _italic_.\n" +
        "Or... wait for it... **_both!_**\n" +
        "And feel free to go crazy ~~crossing stuff out~~.\n\n" +
        "There's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\n" +
        "And if you want to get really crazy, even tables:\n\n" +
        "Wild Header | Crazy Header | Another Header?\n" +
        "------------ | ------------- | -------------\n" +
        "Your content can | be here, and it | can be here....\n" +
        "And here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n" +
        "- With different indentation levels.\n        " +
        "- That look like this.\n\n\n1. And there are numbered lists too.\n" +
        "1. Use just 1s if you want!\n" +
        "1. And last but not least, let's not forget embedded images:\n\n" +
        "![Bottle Logo](https://freeiconshop.com/wp-content/uploads/edd/water-bottle-outline-filled.png)")

    return (
        <div id="wrapper">
            <div className="editor-wrapper col-md-6">
                <div className="editor-toolbar">
                    <h3>Editor</h3>
                </div>
                <textarea id="editor" name="editor" cols="50" value={text}
                          onChange={e => setText(e.target.value)}>
                </textarea>
            </div>
            <div className="preview-toolbar col-md-9">
                <h3>Previewer</h3>
            </div>
            <Preview markdown={text} />
        </div>
    )
}

function Preview({markdown}) {
    return (
        <div id="preview" className="col-md-9"
             dangerouslySetInnerHTML={{__html: marked(markdown, { renderer: renderer })}} >
        </div>
    )
}
ReactDOM.render(<Markdown />, document.getElementById('root'))