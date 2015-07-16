// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  playFirst: function(){
    this.at(0).play();
  },

  enqueue: function(song){
    this.add(song);

    if (this.length === 1){
      this.playFirst();
    }
  },

  removeSong: function(song) {
    this.remove(song);
  },

  ended: function(){
    this.shift();
    if (this.length >0) {
      this.playFirst();
    }
  }

});
