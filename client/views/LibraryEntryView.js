// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  initialize: function() {
    this.model.on('change:playCount',function() {
      this.render();
    },this);
  },

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td>Play Count: <%= playCount %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
