import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model() {
    return this.get('ajax').request('/therapies/');
    // ['Speech Emission', 'Articulation', 'Air Flow'];
  }
});
// this.store.findAll('therapy');
