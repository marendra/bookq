import Ember from 'ember';

export default Ember.Route.extend({
   actions : {
       selectCategory(value,component){
           if (value=="medical"){
               this.transitionTo("add.medical");
           }
       }
   }

});
