import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('publications');
  this.route('publication', { path: '/publication/:publication_id' });
});

export default Router;
