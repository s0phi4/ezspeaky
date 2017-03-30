import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createComment(data) {
      let comment = this.get('store').createRecord('comment', data);
      comment.save();
    },
  },
});
