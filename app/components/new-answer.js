import Ember from 'ember';

export default Ember.Component.extend({
	answerFormIsShowing: false,
	actions: {
		showAnswerForm() {
			this.set('answerFormIsShowing', true);
		},
		saveAnswer() {
			var params = {
				author: this.get('author'),
				answer: this.get('answer'),
				question: this.get('question')
			};
			this.set('answerFormIsShowing', false);
			this.sendAction('saveAnswer', params);
		}
	}
});
