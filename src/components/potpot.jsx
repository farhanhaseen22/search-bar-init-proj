import React, { useState } from "react";

const TextCopier = () => {
  const [sourceText, setSourceText] = useState("");
  const [copiedText, setCopiedText] = useState("");
  const [destinationText1, setDestinationText1] = useState("");
  const [destinationText2, setDestinationText2] = useState("");

  const handleCopy = () => {
    setCopiedText(sourceText);
  };

  const handlePaste = (destinationSetter) => {
    destinationSetter(copiedText);
  };

  return (
    <div>
      <h1>Text Copier</h1>
      {/* Source Textarea */}
      <textarea
        value={sourceText}
        onChange={(e) => setSourceText(e.target.value)}
        placeholder="Enter text here..."
        style={{ width: "300px", height: "100px", margin: "10px" }}
      />
      <br />

      {/* Copy Button */}
      <button onClick={handleCopy}>Copy Text</button>
      <br />

      {/* Destination Textareas */}
      <textarea
        value={destinationText1}
        onChange={(e) => setDestinationText1(e.target.value)}
        placeholder="Paste text here..."
        style={{ width: "300px", height: "100px", margin: "10px" }}
      />
      <br />

      {/* For later planning */}
      {/* thiss textbox will have a copy button next to it, after a condition is fulfilled */}
      <textarea
        value={destinationText2}
        onChange={(e) => setDestinationText2(e.target.value)}
        placeholder="Paste text here..."
        style={{ width: "300px", height: "100px", margin: "10px" }}
      />
      <br />

      {/* Paste Buttons */}
      <button onClick={() => handlePaste(setDestinationText1)}>
        Paste to Textbox
      </button>
    </div>
  );
};

export default TextCopier;
