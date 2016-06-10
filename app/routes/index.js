import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
      cities: this.store.findAll('question'),
      rentals: this.store.findAll('answer')
    });
	}, 
	actions: {
		saveQuestion(params) {
			var newQuestion = this.store.createRecord('question', params);
			newQuestion.save();
			this.transitionTo('index');
		}
	}
});
