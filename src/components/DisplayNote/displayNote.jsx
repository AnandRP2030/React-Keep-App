import style from "./displayNote.module.css";
import { useState } from "react";
import NoteBox from "./NoteBox";

const DisplayNote = ({noteArray}) => {
 

  return (
    <div className={style.displayContainer}>
      {noteArray.map((note, index) => {
        return <NoteBox key={index} value={note.value} />;
      })}

    </div>
  );
};

export { DisplayNote };
