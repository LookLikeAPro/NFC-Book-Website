import DS from "ember-data";

export default DS.Model.extend({
  title: DS.attr(),
  picture: DS.attr(),
  author: DS.attr(),
  description: DS.attr(),
  resources: DS.hasMany('resource')
});
