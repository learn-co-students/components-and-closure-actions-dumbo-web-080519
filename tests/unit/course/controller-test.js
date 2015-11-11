/* jshint expr:true */
import { expect } from 'chai';
import {
  describeModule,
  it
} from 'ember-mocha';

describeModule(
  'controller:course',
  'CourseController',
  {
  },
  function() {
    it("toggles a models featured flag", function() {
      var controller = this.subject();
      controller.set('featured', false);
      controller.send("toggleFeatured");
      expect(controller.get('featured')).to.eq(true);
    });
  }
);
