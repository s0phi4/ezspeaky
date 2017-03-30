import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('therapy', params.therapy_id);
  },
  actions: {
    newComment (comment) {
      comment.save()
      .then(() =>this.transitionTo('therapies.therapy.comment-new'));
    },
  }
});
