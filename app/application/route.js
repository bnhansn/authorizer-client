import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  sessionAccount: Ember.inject.service(),

  beforeModel() {
    this.get('sessionAccount').loadCurrentUser();
  }
});
