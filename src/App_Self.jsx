import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./App.css"; // Import the custom CSS

const App = () => {
  const [markdown, setMarkdown] = useState(
    "# Welcome to Markdown Editor"
  );

  return (
    <div className="editor-container">
      {/* Header */}
      <header className="header">
        <h2>Real-time Markdown Editor</h2>
      </header>

      {/* Main Content */}
      <div className="editor-content">
        {/* Markdown Input Panel */}
        <div className="editor-panel markdown-panel">
          <h6 className="panel-title">Markdown</h6>
          <textarea
            className="editor-textarea"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </div>

        {/* Preview Panel */}
        <div className="editor-panel preview-panel">
          <h6 className="panel-title">Preview</h6>
          <div
            className="editor-preview">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdown}
              </ReactMarkdown>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;