import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('publication', params.publication_id).then(function(data){console.log(data);return data;});
  }
  // setupController(controller, model) {
  //   controller.set('content', model);
  //   controller.set('pdf', model.get('resources').filter(function(resource) {
  //     console.log(resource.get('kind'));
  //     setTimeout(function(){
  //       console.log(resource.get('kind'));
  //     }, 2000);
  //     return resource.get('kind') === "eBook";
  //   }));
  //   // the "user_id" parameter can come from a global variable for example
  //   // or you can implement in another way. This is generally where you
  //   // setup your controller properties and models, or even other models
  //   // that can be used in your route's template
  //   // controller.set('resources', this.get('store').findRecord('resource', params.publication_id));
  //   // controller.set('user', App.User.find(window.user_id));
  // }
});
