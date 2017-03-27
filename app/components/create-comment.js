import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPost: function (model) {
      this.sendAction('createComment', model);
      this.set('newComment.title', null);
      this.set('newComment.content', null);
    }
  }
});
