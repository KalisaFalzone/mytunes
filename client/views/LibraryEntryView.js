// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'li',

  initialize: function() {
    this.model.on('change:playCount',function() {
      this.render();
    },this);
  },

  template: _.template('<span class="artist">(<%= artist %>) </span><%= title %><span class="playCount"> Play Count: <%= playCount %></span>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
