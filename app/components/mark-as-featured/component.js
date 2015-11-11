import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleFeatured: function(){
      this.attrs.notify();
    }
  }
});
