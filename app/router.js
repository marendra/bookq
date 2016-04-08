import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('health');
  this.route('add', function () {
    this.route('medical');
  });

  this.route('event');
  this.route('place');
  this.route('dashboard');
});

export default Router;
