export default class Note {
    constructor(newTitle, newText){
        this._id = '';
        this._title = newTitle.value;
        this._text = newText.value;
        this._edit = false;
        
    }
    get id(){
        return this._id;
    }
    get title(){
        return this._title;
    }
    get text(){
        return this._text;
    }
    get edit(){
        return this._edit;
    }
    set id(newId){
        this._id = newId;
    }
    set title(newTitle){
        this._title = newTitle;
    }
    set text(newText){
        this._text = newText;
    }
    set edit(newEdit){
        this._edit = newEdit;
    }
}
