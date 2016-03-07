import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import config from '../config/environment';
import Ember from 'ember';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: config.apiURL + '/login'
});