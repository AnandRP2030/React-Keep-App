import style from "./displayNote.module.css";

export default function NoteBox(props) {
  const { value } = props;

  return <div className={style.box}>{value}</div>;
}
