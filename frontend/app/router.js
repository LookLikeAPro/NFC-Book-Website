import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  redirect: function() {
    this.transitionTo('publications');
  }
});

Router.map(function() {
  this.route('publications', { path: '/' });
  this.route('publication', { path: '/publication/:publication_id' }, function() {});
  this.route('about');
});

export default Router;
