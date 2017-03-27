import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('therapy');
    // this.get('ajax').request('/therapies/')
    // .then((response)=>console.log(response));
    // ['Speech Emission', 'Articulation', 'Air Flow'];
  }
});
// this.store.findAll('therapy');
