import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      therapies: this.get('store').findAll('therapy'),
      comment: this.get('store').createRecord('comment'),
    });
  }
});
