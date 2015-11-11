/* jshint expr:true */
import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'mark-as-featured',
  'Integration: MarkAsFeaturedComponent',
  {
    integration: true
  },
  function() {
    it('calls external function', function() {
      let object = {name: "An Object", featured: false};

      this.set('model', object);
      this.set('notified', function(){
        this.set('model.featured', true);
      });

      this.render(hbs`{{mark-as-featured
                        name=model.name
                        featured=model.featured
                        notify=(action notified)}}`);
      expect(this.$(".item").text().trim()).to.eq("An Object is not featured");
      this.$('.item-toggle').click();
      expect(this.$('.item').text().trim()).to.eq("An Object is featured");
    });
  }
);
