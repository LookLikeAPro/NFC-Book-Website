import DS from "ember-data";
import Ember from "ember";

export default DS.Model.extend({
  kind: DS.attr(),
  file: DS.attr(),
  name: DS.attr(),
  description: DS.attr(),
  isEbook: Ember.computed(function() {
    return this.get('kind') === 'eBook';
  }).property("kind"),
  isAudiobook: Ember.computed(function() {
    return this.get('kind') === 'Audiobook';
  }).property("kind"),
  isInterview: Ember.computed(function() {
    return this.get('kind') === 'Interview';
  }).property("kind")
});
