// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('songQueue', new SongQueue( JSON.parse( localStorage.getItem('queue') ) ));
    this.set('currentSong', this.get('songQueue').at(0) || new SongModel());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    this.get('library').on('enqueue', function(song){
      this.get('songQueue').enqueue(song);
    }, this);

    this.get('songQueue').on('play', function(song) {
      this.set('currentSong', song);
    }, this);

    this.get('songQueue').on('ended', function(song) {
      var playedSong = this.get('library').findWhere({title: song.get('title')});
      playedSong.set('playCount', playedSong.get('playCount')+1);
      localStorage.setItem(playedSong.get('title'),playedSong.get('playCount'));
    },this);

  }

});
