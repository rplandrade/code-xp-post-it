import Note from './note.js';


var notes =  new Array();

// class Note {
    
//     constructor(newTitle, newText){
//         this._id = '';
//         this._title = newTitle.value;
//         this._text = newText.value;
//         this._edit = false;
        
//     }
//     get id(){
//         return this._id;
//     }
//     get title(){
//         return this._title;
//     }
//     get text(){
//         return this._text;
//     }
//     get edit(){
//         return this._edit;
//     }
//     set id(newId){
//         this._id = newId;
//     }
//     set title(newTitle){
//         this._title = newTitle;
//     }
//     set text(newText){
//         this._text = newText;
//     }
//     set edit(newEdit){
//         this._edit = newEdit;
//     }
// }
class ListNote {
    constructor(section){
        this._list = new Array();
        this._section = section;;
    }
    addNote(title, text, newNote){

        let note = new Note(title, text);
        this._list.push(note);
        printNotes(this._section, this._list);
        newNote.reset();
    }
    removeNote(position){
        this._list.splice(position, 1)
        printNotes(this._section, this._list);
    }
    updateNote(position, newTitle, newText){
        this._list[position].title = newTitle.value;
        this._list[position].text = newText.value;
        this._list[position].edit = false;
        printNotes(this._section, this._list);
    }
    get list(){
        return this._list;
    }
}
const section = document.getElementsByClassName('notes')[0];
let listNote = new ListNote(section);
const addNote = (newNote, title, text) =>{
    listNote.addNote(title, text, newNote);
};
function printNotes(section, list){
    let note = "";
    
    for (let i = 0; i < list.length; i ++){
        if (list[i].edit == true){
            note += '<form class="note">';
            note +=    `<input class="note__title" type="text" name="title" value="${list[i].title}" autofocus />`;
            note +=    `<textarea class="note__body" name="body" rows="5">${list[i].text}</textarea>`;
            note +=    `<button class="note__control" type="button" onclick="listNote.updateNote(${i}, this.parentElement.title, this.parentElement.body)">Concluído</button>`;
            note += '</form>';
        }else{
            note += `<form class="note" onclick="editNote(${i}, this.parentElement)">`;
            note +=    `<h4>${list[i].title}</h4>`;
            note +=    `<p>${list[i].text}</p>`;
            note +=    `<button class="note__control" type="button" onclick="listNote.removeNote(${i})">x</button>`;
            note += '</form>';
        }
        list[i].id = i;
    }
    section.innerHTML = note;
    console.log('teste');
}
function editNote(i, section){
    listNote.list[i].edit = true;
    console.log(listNote.list[i].edit);
    printNotes(section, listNote.list);

}