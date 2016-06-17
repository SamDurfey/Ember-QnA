import Ember from 'ember';

export default Ember.Component.extend({
	currentUser: Ember.inject.service(),

	actions: {
		logIn() {
			var input = this.get('userName');
			this.get('currentUser').login(input);
			this.sendAction('goBack');
		}
	}
});
