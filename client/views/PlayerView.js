// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  events: {
    'ended': 'ended'
  },

  ended: function() {
    this.model.ended();
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    var url = this.model.get('url');

    return this.$el.attr('src', url ? url : '');
  }

});
