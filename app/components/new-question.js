import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
	currentUser: Ember.inject.service(),
	questionFormIsShowing: false,
	actions: {
		showQuestionForm() {
			this.set('questionFormIsShowing', true);
		},
		saveQuestion() {
			var params = {
				author: this.get('currentUser.user'),
				title: this.get('title'),
				body: this.get('body'),
				timeStamp: moment().format('h:mm a, MMMM Do, YYYY')
			};
			this.set('questionFormIsShowing', false);
			this.sendAction('saveQuestion', params);
		}
	}
});
