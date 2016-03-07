import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPISerializer.extend({
  // serialize ember's camelCase params to underscore format for compatability with rails
  keyForAttribute: function (key) {
    return Ember.String.underscore(key);
  },

  keyForRelationship: function (key) {
    return Ember.String.underscore(key);
  }
});