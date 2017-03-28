import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('speaky-missions');
  this.route('speech-emission');
  this.route('articulation');
  this.route('sound-recognition');
});

export default Router;
