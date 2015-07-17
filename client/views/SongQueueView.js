// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.collection.on('add', this.queueSong, this);
  },

  queueSong: function(song){
    this.$el.append(new SongQueueEntryView({model: song}).render());
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<h3>Song Queue</h3>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },

  append: function(song) {
    this.$el.append(new SongQueueEntryView({model: song}).render());
  }

});
