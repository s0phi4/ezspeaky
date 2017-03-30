import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.warn('params is', params);
    return this.get('store').createRecord('comment');
  },

  actions: {
    create(comment) {
      comment.save();
    },
  },
});
