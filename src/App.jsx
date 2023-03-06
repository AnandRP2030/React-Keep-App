import Navbar from "./components/Navbar/navbar.jsx";
import Footer from "./components/Footer/footer.jsx";
import { LeftNav } from "./components/left-bar/LeftBar.jsx";
import TakeNote from "./components/TakeNote/InputNote.jsx";
import { DisplayNote } from "./components/DisplayNote/displayNote.jsx";
import { useState } from "react";
function App() {
  const [noteArray, setNoteArray] = useState([]);

  function addNote(value) {
    setNoteArray([...noteArray, { value }]);
  }

  return (
    <div>
      <Navbar />
      <LeftNav />
      <TakeNote addNote={addNote} />
      <DisplayNote noteArray={noteArray} />
      <Footer />
    </div>
  );
}

export default App;
