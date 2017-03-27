import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['https://www.youtube.com/watch?v=BLuZdiX7Wrg', 'https://www.youtube.com/watch?v=XhuU3c5QSso'];
  }
});
