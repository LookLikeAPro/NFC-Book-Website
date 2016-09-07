import DS from "ember-data";
import Ember from "ember";

export default DS.Model.extend({
  title: DS.attr(),
  picture: DS.attr(),
  author: DS.attr(),
  description: DS.attr(),
  resources: DS.hasMany('resource'),
  hasEbook: Ember.computed(function() {
    return DS.PromiseObject.create({
      promise: this.get('resources').then( function (allResources) {
        return Promise.all(allResources.map(function(resource) {
          return resource.get("isEbook");
        })).then(function(results) {
          return !results.every(function(result) {return result === false;});
        });
      })
    });
  }).property("resources"),
  hasAudiobook: Ember.computed(function() {
    return DS.PromiseObject.create({
      promise: this.get('resources').then( function (allResources) {
        return Promise.all(allResources.map(function(resource) {
          return resource.get("isAudiobook");
        })).then(function(results) {
          return !results.every(function(result) {return result === false;});
        });
      })
    });
  }).property("resources"),
  hasInterview: Ember.computed(function() {
    return DS.PromiseObject.create({
      promise: this.get('resources').then( function (allResources) {
        return Promise.all(allResources.map(function(resource) {
          return resource.get("isInterview");
        })).then(function(results) {
          return !results.every(function(result) {return result === false;});
        });
      })
    });
  }).property("resources")
});
