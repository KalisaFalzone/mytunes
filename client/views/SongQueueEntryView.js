// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'li',

  initialize: function() {
   this.model.on('remove',this.remove,this);
  },

  template: _.template('<span class="artist">(<%= artist %>)</span> <%= title %>'),

  initialize: function() {
    this.model.on('remove',this.remove,this);
  },

  events: {
    'click': function() {
      this.model.removeSong();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
