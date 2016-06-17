import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		goBack() {
			this.transitionTo('index');
		}
	}
});
