var notes =  new Array();

function addNote(newNote, title, text, section){
    var note = new Object();
    note.id = '';
    note.title = title.value;
    note.text = text.value;
    note.edit = false;
    
    notes.push(note);
    console.log(notes);
    printNotes(section);
    newNote.reset();
}
function printNotes(section){
    var note = "";

    for (i = 0; i < notes.length; i ++){
        if (notes[i].edit == true){
            note += '<form class="note">';
            note +=    '<input class="note__title" type="text" name="title" value="'+notes[i].title+'" autofocus />';
            note +=    '<textarea class="note__body" name="body" rows="5">'+notes[i].text+'</textarea>';
            note +=    '<button class="note__control" type="button" onclick="updateNote('+i+', this.parentElement.parentElement, this.parentElement.title, this.parentElement.body)">Concluído</button>';
            note += '</form>';
        }else{
            note += '<form class="note" onclick="editNote('+i+', this.parentElement)">';
            note +=    '<h4>'+notes[i].title+'</h4>';
            note +=    '<p>'+notes[i].text+'</p>';
            note +=    '<button class="note__control" type="button" onclick="removeNote('+i+', this.parentElement.parentElement)">x</button>';
            note += '</form>';
        }
        notes[i].id = i;
    }
    section.innerHTML = note;
}
function removeNote(i, section){
    notes.splice(i, 1);
    printNotes(section);
}
function editNote(i, section){
    notes[i].edit = true;
    printNotes(section);
}
function updateNote(i, section, title, text){
    notes[i].title = title.value;
    notes[i].text = text.value;
    notes[i].edit = false;
    printNotes(section);
}