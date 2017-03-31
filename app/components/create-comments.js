import Ember from 'ember';

export default Ember.Component.extend({
  newComment:{
    title: '',
    content: '',
  },
  init() {
      this._super(...arguments);
      this.set('newComment', {});
    },


  actions: {
    submit() {
      let data = this.get('newComment');
      data.therapy = this.get('therapy');
      this.sendAction('submit', data);
      this.set('newComment.title', '');
      this.set('newComment.content', '');
      // Ember.set(comment, 'title', this.get('title'));
      // Ember.set(comment, 'content', this.get('content'));
      // Ember.set(comment, 'therapy', this.get('therapy'));

      // this.sendAction('create', comment);
    },
  },
});
