import React, { useState, useEffect } from "react";
import "./App.css"; // Import the custom CSS
import apiService from "./services/apiService";

const App = () => {
  const [markdown, setMarkdown] = useState(
    "# Welcome to Markdown Editor"
  );
  const [htmlPreview, setHtmlPreview] = useState("");

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const html = await apiService.convertMarkdown(markdown);
        setHtmlPreview(html);
      } catch (error) {
        console.error("Error fetching preview:", error);
      }
    };
    fetchPreview();
  }, [markdown]);

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
            className="editor-preview"
            dangerouslySetInnerHTML={{ __html: htmlPreview }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
