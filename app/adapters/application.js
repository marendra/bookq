import Ember from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';

const { getOwner } = Ember;

export default FirebaseAdapter.extend({
  firebase:  getOwner.service(),
});
