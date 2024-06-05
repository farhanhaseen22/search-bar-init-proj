import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

const TextCopier = () => {
  const [sourceText, setSourceText] = useState("");
  const [copiedText, setCopiedText] = useState("");
  const [destinationText, setDestinationText] = useState("");

  const handleCopy = () => {
    setCopiedText(sourceText);
  };

  const handlePaste = () => {
    setDestinationText(copiedText);
  };

  return (
    <div>
      <h1>The Area of Text Happennings</h1>

      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <input
          type="text"
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
          placeholder="Enter text here..."
          style={{ width: "250px", height: "30px", marginRight: "10px" }}
        />
        <button
          onClick={handleCopy}
          style={{ width: "110px", height: "40px", fontSize: "14px" }}
        >
          <i className="fas fa-copy"></i> Copy the Previous Text
        </button>
      </div>

      <hr />
      <hr />

      {/* Source Input */}
      <input
        type="text"
        value={sourceText}
        onChange={(e) => setSourceText(e.target.value)}
        placeholder="Enter text here..."
        style={{ width: "300px", margin: "10px" }}
      />
      <br />

      {/* Copy Button */}
      <button onClick={handleCopy} style={{ margin: "10px" }}>
        <i className="fas fa-copy"></i> Copy Text
      </button>
      <br />

      {/* Destination Input */}
      <input
        type="text"
        value={destinationText}
        onChange={(e) => setDestinationText(e.target.value)}
        placeholder="Paste text here..."
        style={{ width: "300px", margin: "10px" }}
      />
      <br />

      {/* Paste Button */}
      <button onClick={handlePaste} style={{ margin: "10px" }}>
        <i className="fas fa-paste"></i> Paste Text
      </button>
    </div>
  );
};

export default TextCopier;
