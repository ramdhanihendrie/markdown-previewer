import React, { useEffect, useRef, useState } from 'react'
import { marked } from 'marked'
import hljs from 'highlight.js';
import "./App.css"

function App() {
  const [text, setText] = useState("# Default Markdown")
  const previewEl = useRef(null)

  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
    gfm: true,
    breaks: true,
  })
  
  const handleText = (e) => {
    setText(e.target.value)
  }

  const markedText = marked.parse(text)
  
  useEffect(() => {
    previewEl.current.innerHTML = markedText
  })


  return (
    <div className="App">
      <h1 className="app-title">Markdown Previewer</h1>
      <div id="editor-container">
        <textarea id="editor" onChange={handleText} placeholder="Editor" value={text}></textarea>
      </div>
      <div id="preview" ref={previewEl}></div>
      <footer>
        <p>Made with ♥ by RamdhaniHendrie</p>
      </footer>
    </div>
  )
}

export default App;
