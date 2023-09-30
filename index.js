const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")
const timerEl = document.getElementById("timer")
const wrokEl = document.getElementById("wrok")
const breakEl = document.getElementById("break")
let interval;
let timeLeft = 1500; //sec

let newEl = true;

function updateTimer() {
  let min = Math.floor(timeLeft / 60)
  let sec = timeLeft % 60
  timerEl.innerHTML = `${min.toString().padStart(2, "0")} : 
    ${sec.toString().padStart(2, "0")}`
}
function startTimer() {
  clearInterval(timeInter)
  console.log("Start 1st ");
  interval = setInterval(() => {
    timeLeft--;
    updateTimer()
    if (timeLeft === 0) {
      alert("Continue Your Wrok")
      timeLeft = 1500;
    }
  }, 1000)
}

function stopTimer() {
  clearInterval(interval)
  clearInterval(timeInter)
  console.log("stop");
}

function resetTimer() {
  clearInterval(interval)
  clearInterval(timeInter)
  timeLeft = 1500
  console.log("Reset");
  updateTimer()

}


startEl.addEventListener('click', startTimer)
stopEl.addEventListener('click', stopTimer)
resetEl.addEventListener('click', resetTimer)


// new 

let sound = ''

function alarm() {
  sound.onplay()
}


let breakTime = 300;



function startNew() {
  console.log("Click");
}


function breakUpdateTimer() {
  let mins = Math.floor(breakTime / 60)
  let secs = breakTime % 60
  timerEl.innerHTML = `${mins.toString().padStart(2, "0")} : 
    ${secs.toString().padStart(2, "0")}`
}

let timeInter



// function breakNew(){
//     console.log("Break");
//     timerEl.innerHTML = `05 : 00`
//     clearInterval(interval)
//     breakTime = 10;
//     document.getElementById('start').addEventListener('click',() => {
//         console.log("Break Time");
//         if (breakTime === 0) {
//              alert("Time is Up continue your break");
//              breakTime = 300
//         }else{
//             timeInter = setInterval(() =>{
//                 breakTime--;
//                 breakUpdateTimer()
//                 if (breakTime === 0) {
//                     alert("Time is Up continue your break");
//                     breakTime = 300;
//                 }
//             },1000)
//         }


//     })
// }


function startNew() {

  console.log("Wrok");
  timerEl.innerHTML = `25 : 00`
  resetTimer()
  // clearInterval(interval)
  // clearInterval(timeInter)
  // timeLeft = 1500

  // const test = document.getElementById("start")
  // .addEventListener('click', () =>{
  //     console.log("hi");

  //     interval = setInterval(()=>{
  //         timeLeft--;
  //         updateTimer()
  //         if (timeLeft === 0) {

  //             timeLeft = 1500;
  //         }
  //     },1000)

  // })
}

//  function reset_Time(){
//     switch(newFlag)
//     {
//         case "break_Time":
//             timeLeft = 300;
//             break;
//         case "wrok_time":
//             timeLeft = 1500;
//             break;
//         default:
//             timeLeft = 1500;        
//     }
//     updateTimer()
// }



//     function breakNew(){
//         timerEl.innerHTML = `05 : 00`
//         console.log("Break Hit");
//         newFlag = "break_Time";
//         clearInterval(interval)

//         updateTimer()

//     }




















wrokEl.addEventListener('click', startNew)


breakEl.addEventListener('click', () => {
  timerEl.innerHTML = `05 : 00`
  console.log("Break Hit");
  clearInterval(interval)
  breakTime = 300;
  timeInter = setInterval(() => {
    breakTime--;
    breakUpdateTimer()
    if (breakTime === 0) {
      alert("Continue Your Wrok")
      breakTime = 300;
    }
  }, 1000)
})






// note



const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");

getNotes().forEach((note) => {
  const noteEl = createNoteEl(note.id, note.content);
  appEl.insertBefore(noteEl, btnEl);
});

function createNoteEl(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Empty Note";
  element.value = content;

  element.addEventListener("dblclick", () => {
    const warning = confirm("Do you want to delete this note?");
    if (warning) {
      deleteNote(id, element);
    }
  });

  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });

  return element;
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id)
  saveNote(notes)
  appEl.removeChild(element)
}

function updateNote(id, content) {
  const notes = getNotes();
  const target = notes.filter((note) => note.id == id)[0];
  target.content = content;
  saveNote(notes);
}

function addNote() {
  const notes = getNotes();
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };
  const noteEl = createNoteEl(noteObj.id, noteObj.content);
  appEl.insertBefore(noteEl, btnEl);

  notes.push(noteObj);

  saveNote(notes);
}

function saveNote(notes) {
  localStorage.setItem("note-app", JSON.stringify(notes));
}

function getNotes() {
  return JSON.parse(localStorage.getItem("note-app") || "[]");
}

btnEl.addEventListener("click", addNote);



// Todo

const inputBox = document.getElementById("input")
const listBox = document.getElementById("list")
const btnE = document.getElementById("btnNew")


function addTodo() {
  console.log("Ok");
  if (inputBox.value === '') {
    alert("Do something")
  }
  else {
    let li = document.createElement("li")
    li.innerHTML = inputBox.value
    listBox.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span)
  }
  inputBox.value = "";
  saveTodo()

}


btnE.addEventListener('click', addTodo);


listBox.addEventListener('click', function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("check")
    saveTodo();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveTodo();
  }
}, false)


function saveTodo() {
  localStorage.setItem("data", listBox.innerHTML)
}

function showTodo() {
  listBox.innerHTML = localStorage.getItem("data")
}
showTodo()