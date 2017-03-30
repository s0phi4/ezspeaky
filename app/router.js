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
  this.route('therapies', function () {
    this.route('index', { path: '/' });
    this.route('therapy', { path: ':therapy_id' }, function () {
      this.route('comment-new', { path: 'comments/new' });
    });
  });
});

export default Router;
