import Ember from 'ember';
import moment from 'moment';

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
				body: this.get('body'),
				timeStamp: moment().format('h:mm a, MMMM Do, YYYY')
			};
			this.set('questionFormIsShowing', false);
			this.sendAction('saveQuestion', params);
		}
	}
});
