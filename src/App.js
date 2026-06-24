import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  function showTitle(e) {
    setTitle(e.target.value);
  }

  function showNote(e) {
    setNote(e.target.value);
  }

  function addNote() {
    if (title.trim() === "" || note.trim() === "") {
      alert("Please enter title and note");
      return;
    }

    const note_class = {
      id: Date.now(),
      title: title,
      Content: note,
    };

    setNotes([...notes, note_class]);

    setTitle("");
    setNote("");
  }

  function deleteNote(id) {
    const updatedNotes = notes.filter((item) => item.id !== id);
    setNotes(updatedNotes);
  }

  return (
    <div
      style={{
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center" }}>📝 Notes Taking App</h1>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "400px",
          margin: "auto",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      >
        <input
          type="text"
          value={title}
          placeholder="Enter Title"
          onChange={showTitle}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <textarea
          value={note}
          placeholder="Enter Note"
          onChange={showNote}
          style={{
            width: "100%",
            padding: "10px",
            height: "100px",
          }}
        />

        <br />
        <br />

        <button
          onClick={addNote}
          style={{
            width: "100%",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Add Note
        </button>
      </div>

      <h2 style={{ textAlign: "center", marginTop: "30px" }}>
        My Notes
      </h2>

      {notes.map((num) => (
        <div
          key={num.id}
          style={{
            backgroundColor: "white",
            padding: "15px",
            margin: "15px auto",
            width: "400px",
            borderRadius: "10px",
            boxShadow: "0 0 8px rgba(0,0,0,0.2)",
          }}
        >
          <h3>{num.title}</h3>

          <p>{num.Content}</p>

          <button
            onClick={() => deleteNote(num.id)}
            style={{
              padding: "8px 15px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;