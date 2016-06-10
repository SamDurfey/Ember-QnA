import Ember from 'ember';

export default Ember.Component.extend({
	questionFormIsShowing: false,
	actions: {
		showQuestionForm() {
			this.set('questionFormIsShowing', true);
		},
		saveQuestion() {
			var params = {
				author: this.get('author'),
				title: this.get('title'),
				question: this.get('question')
			};
			this.set('questionFormIsShowing', false);
			this.sendAction('saveQuestion', params);
		}
	}
});
