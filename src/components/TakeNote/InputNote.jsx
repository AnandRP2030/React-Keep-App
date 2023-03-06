import style from "./takeInput.module.css";
import { useState } from "react";

export default function TakeNote({ addNote }) {
  const [inputData, setInputData] = useState("");

  const handleKeydown = (e) => {
    if (event.key === "Enter") {
      addNote(inputData);
      setInputData("");
    }
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setInputData(e.target.value);
        }}
        onKeyDown={handleKeydown}
        className={style.takeInput}
        value={inputData}
        type="text"
        placeholder="Take a note..."
      />
    </div>
  );
}
