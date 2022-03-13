import { addNote, removeNote } from "./actions/actions";
import store from "./store/store";

// We use store.getState() to get our app state from the store

console.log("Before:", store.getState());
store.dispatch(addNote("One", "One content"));
store.dispatch(addNote("Two", "Two content"));
store.dispatch(addNote("Three", "Three content"));
console.log("After:", store.getState());

// HTML references
let noteUList = document.getElementById("notes");
let addNoteForm = document.getElementById("add-note");
let addNoteTitle = addNoteForm["title"];
let addNoteContent = addNoteForm["content"];

// Redux
function deleteNote(index) {
  store.dispatch(removeNote(index));
}

function renderNotes() {
  let notes = store.getState().notes;

  noteUList.innerHTML = "";
  notes.map((note, index) => {
    let noteItem = `
      <li>
        <b>${note.title}</b>
        <button data-id="${index}">x</button>
        <br />
        <span>${note.content}</span>
      </li>
    `;
    noteUList.innerHTML += noteItem;
  });

  setDeleteNoteButtonsEventListeners();
}

// Event Listeners
addNoteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = addNoteTitle.value;
  let content = addNoteContent.value;
  store.dispatch(addNote(title, content));
});

function setDeleteNoteButtonsEventListeners() {
  let buttons = document.querySelectorAll("ul#notes li button");

  for (let button of buttons) {
    button.addEventListener("click", () => {
      deleteNote(button.dataset.id);
    });
  }
}

store.subscribe(() => {
  renderNotes();
});

// Render initial Notes
// renderNotes();
