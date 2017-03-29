import Ember from 'ember';

export function firstTherapy(params) {
  return params.toString() === "Speech Emission";
}

export default Ember.Helper.helper(firstTherapy);
