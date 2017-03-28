import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  comments: DS.hasMany('comment'),
  videos: DS.hasMany('video'),
});
