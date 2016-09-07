import DS from "ember-data";
import Ember from "ember";

export default DS.Model.extend({
  expanded: false,
  kind: DS.attr(),
  file: DS.attr(),
  name: DS.attr(),
  description: DS.attr(),
  publication: DS.belongsTo('publication'),
  eBookDownloadName: Ember.computed(function() {
    var filetype = this.get('file').split(".");
    filetype = filetype[filetype.length-1];
    filetype = filetype.split("?")[0];
    return "download."+filetype;
  }).property("file"),
  eBookFormat: Ember.computed(function() {
    var filetype = this.get('file').split(".");
    filetype = filetype[filetype.length-1];
    filetype = filetype.split("?")[0];
    return filetype;
  }).property("file"),
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
