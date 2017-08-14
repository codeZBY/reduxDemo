import Reflux from 'reflux'
import NoteActions from './fluxActions'

var _notes = []

var NoteStore = Reflux.createStore({
    init: function() {
        this.listenTo(NoteActions.createNote, this.onCreate);
        this.listenTo(NoteActions.editNote, this.onEdit);
    },
    onCreate:function(note){
      _notes.push(note)

      this.trigger(_notes)
    },
    onEdit:function(note){
      console.log(note)
      for(var i=0;i<_notes.length;i++){
        if(_notes[i]._id===note.id){
          _notes[i].text=note.text
          this.trigger(_notes)
          break
        }
      }
    },
    getNotes:function(){
      return _notes
    },
    getNote:function(id){
      for(var i=0;i<_notes.length;i++){
        if(_notes[i]._id===id){
          return _notes[i]
        }
      }
    }
})

module.exports=NoteStore