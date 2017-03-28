import Ember from 'ember';

export function secondTherapy(params) {
  return params.toString() === "Articulation";
}

export default Ember.Helper.helper(secondTherapy);
