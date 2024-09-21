
const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const closeBox = popupBox.querySelector("header i");
const titleTag = popupBox.querySelector("input");
const descTag = popupBox.querySelector("textarea");
const addBtn = popupBox.querySelector("button");
const menuel = document.querySelector(".iconel");

let isEditing = false;
let editIndex = null;


const months = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];



const notes = JSON.parse(localStorage.getItem("notes") || "[]");
const lastId = parseInt(localStorage.getItem("lastId") || "0");


const getNextId = () => {
  const currentId = parseInt(localStorage.getItem("lastId") || "0");
  const newId = currentId + 1;
  localStorage.setItem("lastId", newId);
  return newId;
};


const showNotes = () => {
  document.querySelectorAll(".note").forEach((note) => note.remove());

  
  notes.sort((a, b) => b.id - a.id);


  notes.forEach((note, index) => {
    const litag = `
      <li class="note">
        <div class="details">
          <p>${note.title}</p>
          <span>${note.description.length > 100 ? note.description.slice(0, 100) + '...' : note.description}</span>
        </div>
        <div class="bottom-content">
          <span>${note.date}</span>
          <div class="settings">
            <i onclick="showMenu(this)" class="fa-solid fa-gear"></i>
            <ul class="menu">
              <li onclick="editNote(${index}, '${note.title}', '${note.description}')">
                <i class="fa-solid fa-pencil"></i> EDITAR
              </li>
              <li onclick="deleteNote(${index})">
                <i class="fa-solid fa-trash"></i> EXCLUIR
              </li>
            </ul>
          </div>
        </div>
      </li>`;
    addBox.insertAdjacentHTML("afterend", litag);
  });
};


function showMenu(elem) {
  elem.parentElement.classList.add("show");
  document.onclick = (e) => {
    if (e.target.tagName !== "I" || e.target !== elem) {
      elem.parentElement.classList.remove("show");
    }
  };
}


function deleteNote(noteId) {
  notes.splice(noteId, 1); 
  localStorage.setItem("notes", JSON.stringify(notes)); 
  showNotes(); 
}


function editNote(noteId, title, description) {
  titleTag.value = title;
  descTag.value = description;
  isEditing = true;
  editIndex = noteId;
  addBox.click(); 
}


addBox.onclick = () => popupBox.classList.add("show");


closeBox.onclick = () => {
  titleTag.value = "";
  descTag.value = "";
  popupBox.classList.remove("show");
};


addBtn.onclick = (e) => {
  e.preventDefault(); 

  const title = titleTag.value;
  const description = descTag.value;


  if (!title || !description) {
    alert("Por favor, preencha todos os campos antes de salvar.");
    return;
  }

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();



  const noteInfo = {
    id: isEditing ? notes[editIndex].id : getNextId(),
    title: title,
    description: description,
    date: `${day} ${month} ${year}`,
  };
  


  if (isEditing) {
    notes[editIndex] = noteInfo;
    isEditing = false;
    editIndex = null;
  } else {
    notes.push(noteInfo);
  }

  localStorage.setItem("notes", JSON.stringify(notes));


  closeBox.click();
  showNotes();
};


showNotes();
