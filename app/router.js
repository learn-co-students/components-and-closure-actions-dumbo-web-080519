import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('courses', function() {
    this.route('course', {path: '/:course_id'});
  });
});

export default Router;
