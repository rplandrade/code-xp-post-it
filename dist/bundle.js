/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _note = __webpack_require__(1);

var _note2 = _interopRequireDefault(_note);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var notes = new Array();

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

var ListNote = function () {
    function ListNote(section) {
        _classCallCheck(this, ListNote);

        this._list = new Array();
        this._section = section;;
    }

    _createClass(ListNote, [{
        key: 'addNote',
        value: function addNote(title, text, newNote) {

            var note = new _note2.default(title, text);
            this._list.push(note);
            printNotes(this._section, this._list);
            newNote.reset();
        }
    }, {
        key: 'removeNote',
        value: function removeNote(position) {
            this._list.splice(position, 1);
            printNotes(this._section, this._list);
        }
    }, {
        key: 'updateNote',
        value: function updateNote(position, newTitle, newText) {
            this._list[position].title = newTitle.value;
            this._list[position].text = newText.value;
            this._list[position].edit = false;
            printNotes(this._section, this._list);
        }
    }, {
        key: 'list',
        get: function get() {
            return this._list;
        }
    }]);

    return ListNote;
}();

var section = document.getElementsByClassName('notes')[0];
var listNote = new ListNote(section);
var addNote = function addNote(newNote, title, text) {
    listNote.addNote(title, text, newNote);
};
function printNotes(section, list) {
    var note = "";

    for (var i = 0; i < list.length; i++) {
        if (list[i].edit == true) {
            note += '<form class="note">';
            note += '<input class="note__title" type="text" name="title" value="' + list[i].title + '" autofocus />';
            note += '<textarea class="note__body" name="body" rows="5">' + list[i].text + '</textarea>';
            note += '<button class="note__control" type="button" onclick="listNote.updateNote(' + i + ', this.parentElement.title, this.parentElement.body)">Conclu\xEDdo</button>';
            note += '</form>';
        } else {
            note += '<form class="note" onclick="editNote(' + i + ', this.parentElement)">';
            note += '<h4>' + list[i].title + '</h4>';
            note += '<p>' + list[i].text + '</p>';
            note += '<button class="note__control" type="button" onclick="listNote.removeNote(' + i + ')">x</button>';
            note += '</form>';
        }
        list[i].id = i;
    }
    section.innerHTML = note;
    console.log('teste');
}
function editNote(i, section) {
    listNote.list[i].edit = true;
    console.log(listNote.list[i].edit);
    printNotes(section, listNote.list);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Note = function () {
    function Note(newTitle, newText) {
        _classCallCheck(this, Note);

        this._id = '';
        this._title = newTitle.value;
        this._text = newText.value;
        this._edit = false;
    }

    _createClass(Note, [{
        key: 'id',
        get: function get() {
            return this._id;
        },
        set: function set(newId) {
            this._id = newId;
        }
    }, {
        key: 'title',
        get: function get() {
            return this._title;
        },
        set: function set(newTitle) {
            this._title = newTitle;
        }
    }, {
        key: 'text',
        get: function get() {
            return this._text;
        },
        set: function set(newText) {
            this._text = newText;
        }
    }, {
        key: 'edit',
        get: function get() {
            return this._edit;
        },
        set: function set(newEdit) {
            this._edit = newEdit;
        }
    }]);

    return Note;
}();

exports.default = Note;

/***/ })
/******/ ]);