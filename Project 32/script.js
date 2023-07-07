const addBtn = document.getElementById("add");
const notes = JSON.parse(localStorage.getItem("notes"));

// console.log(notes);
if (notes) {
  // console.log("yes");
  notes.forEach((note) => {
    addNewNote(note);
  });
}

// localStorage.clear();

addBtn.addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  // console.log(note);

  note.innerHTML = `
   <div class="tools">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
   </div>

   <div class="main ${text ? "" : " hidden"}"></div>
   <textarea class="${text ? "hidden" : ""}"></textarea>
  `;

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textarea = note.querySelector("textarea");

  textarea.value = text;
  main.innerHTML = marked(text);

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
  });

  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateLS();
  });

  textarea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
  });

  document.body.appendChild(note);
}

function updateLS() {
  const noteText = document.querySelectorAll("textarea");
  const notes = [];
  noteText.forEach((note) => notes.push(note.value));
  localStorage.setItem("notes", JSON.stringify(notes));
}
