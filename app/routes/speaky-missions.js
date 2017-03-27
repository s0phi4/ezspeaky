import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Speech Emission', 'Articulation', 'Air Flow'];
  }
});
// this.store.findAll('therapy');
