import React, { useCallback } from "react";
import "./style.css";

export default function Anexoitem() {
  const regex = /\\/g;
  var path = String.raw`C:\Users\User\Pictures\sortArray.JPG`;

  function handleCopy() {
    var copyText = document.getElementById("path");
    var textArea = document.createElement("textarea");

    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand("Copy");
    textArea.remove();

    window.alert(`${path}`);
  }

  const handlepath = useCallback(() => {
    console.log(path.replace(regex, "\\\\"));
  }, [path]);

  return (
    <div className="container-anexo">
      <div className="item-anexo">
        <span type="text" id="path" onClick={handleCopy} className="item-patch">
          {path}
        </span>
        <button onClick={handlepath} className="button-open">
          Abrir
        </button>
      </div>
    </div>
  );
}
