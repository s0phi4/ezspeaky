import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    createComment(data) {
      let comment = this.get('store').createRecord('comment', data);
      comment.save()
      .catch(() => {
        comment.destroyRecord();
        this.get('flashMessages')
        .danger('There was a problem. Please enter title and comment in fields.');
      });
    },
  },
});
