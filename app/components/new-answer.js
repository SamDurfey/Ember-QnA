import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
	currentUser: Ember.inject.service(),
	answerFormIsShowing: false,
	actions: {
		showAnswerForm() {
			this.set('answerFormIsShowing', true);
		},
		saveAnswer() {
			var params = {
				author: this.get('currentUser.user'),
				body: this.get('body'),
				question: this.get('question'),
				timeStamp: moment().format('h:mm a, MMMM Do, YYYY')
			};
			this.set('answerFormIsShowing', false);
			this.sendAction('saveAnswer', params);
		}
	}
});
