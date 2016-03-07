import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  sessionAccount: Ember.inject.service(),

  actions: {
    authenticate() {
      let { username, password } = this.getProperties('username', 'password');

      this.get('session')
      .authenticate('authenticator:oauth2', username, password)
      .then(() => {
        this.get('sessionAccount').loadCurrentUser();
      }).catch((reason) => {
        this.set('errorMessage', 'Invalid username or password');
      });
    }
  }
});
