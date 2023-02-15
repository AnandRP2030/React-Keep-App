import styles from "./leftBar.module.css";
import {Options} from "../Options/options.jsx";


function LeftNav() {
  return (
    <div className={styles.leftNav}>
      <div>
        <Options active={true} title="Notes" emojiName="emoji_objects"/>
        <Options active={false} title="Reminder" emojiName="notifications"/>
        <Options active={false} title="Personal" emojiName="label"/>
        <Options active={false} title="Edit labels" emojiName="edit"/>
        <Options active={false} title="Archive" emojiName="archive"/>
        <Options active={false} title="Bin" emojiName="delete"/>
       
      </div>
    </div>
  );
}

export { LeftNav };
