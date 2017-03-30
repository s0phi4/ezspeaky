import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit(comment) {
      console.warn('comment is', comment);
      console.warn('therapy is', this.get('therapy'))

      Ember.set(comment, 'title', this.get('title'));
      Ember.set(comment, 'content', this.get('content'));
      Ember.set(comment, 'therapy', this.get('therapy'));

      console.warn('comment is', comment);

      // this.sendAction('create', comment);
    },
  },
});
