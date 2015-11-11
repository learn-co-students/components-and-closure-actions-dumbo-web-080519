/* jshint expr:true */
import { expect } from 'chai';
import {
  describeModule,
  it
} from 'ember-mocha';
import Ember from 'ember';

describeModule(
  'controller:courses.course',
  'CourseController',
  {
  },
  function() {
    it("toggles a models featured flag", function() {
      var controller = this.subject();
      controller.set('model', Ember.Object.create({ featured: false }));
      controller.send("handleFeatured");
      expect(controller.get('model.featured')).to.eq(true);
    });
  }
);
