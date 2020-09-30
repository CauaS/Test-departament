import React, { useState, useRef } from "react";

import "jodit";
import "jodit/build/jodit.min.css";
import "./style.css";
import initialValue from "./InitialValue/initialValue";

import JoditEditor from "jodit-react";

export default function Editor() {
  const EditorRef = useRef(null);

  const [content, setContent] = useState(initialValue(35894));

  return (
    <div className="content-editor">
      <JoditEditor
        ref={EditorRef}
        value={content}
        config={{
          readonly: false, // all options from https://xdsoft.net/jodit/play.html
          enableDragAndDropFileToEditor: true,
          uploader: {
            insertImageAsBase64URI: true
          },
          language: "pt_br",
          i18n: "pt_br",
          activeButtonsInReadOnly: ["source", "fullsize", "print", "about"]
        }}
        onBlur={newContent => setContent(newContent)}
      />
    </div>
  );
}
