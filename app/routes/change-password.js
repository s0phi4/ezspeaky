import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  model() {
    if (this.get('isAuthenticated')) {
      return this.get('store').findAll('dataset');
    } else {
      this.transitionTo('sign-in');
      this.get('flashMessages')
        .danger('Please sign in to view this page.');
    }
  },

  actions: {
    changePassword(passwords) {
      this.get('auth').changePassword(passwords)
        .then(() => this.get('auth').signOut())
        .then(() => this.transitionTo('sign-in'))
        .then(() => {
          this.get('flashMessages')
            .success('Successfully changed your password!');
        })
        .then(() => {
          this.get('flashMessages').warning('You have been signed out.');
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem. Please try again.');
        });
    },
  },
});
