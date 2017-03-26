import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      mission: 'Vocalization',
      mission2: 'Articulation',
      mission3: 'Air'
    };
  }
});
