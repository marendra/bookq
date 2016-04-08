import Ember from 'ember';

export default Ember.Route.extend({
        beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },

  actions: {
    signIn: function(provider) {
      this.get("session").open("firebase", { provider: provider}).then(function(data) {
      var email = data.currentUser.email;
      console.log(email);
      var name = data.currentUser.displayName;
      console.log(name);
      var userFb = this.store.find('user',{
        email:email
      });
       console.log(userFb);
       if (userFb){
         
       }
       else
       {
         var newUser = this.store.createRecord('user',{
           name:name,
           email:email,
           lastlogin:new Date().getTime()
         });
         newUser.save();
       }
      });
    },
    signOut: function() {
      this.get("session").close();
      this.transitionTo('index');
    }
  }
});
