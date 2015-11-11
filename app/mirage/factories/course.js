import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: function(){
    return `Learn ${faker.hacker.noun()}`;
  },
  featured: false
});
