import Ember from 'ember';

export default Ember.Component.extend({
	timesAnswered: Ember.computed('question.answers', function() {
		var answerCount = this.get('question.answers.length');
		if (answerCount === 0) {
			return "This question has not been answered. Be the first to respond!";
		} else {
			return "This question has been answered " + answerCount + (answerCount === 1 ? " time" : " times");
		}
	}),

	actions: {
		//stuff and things
/*
		destroyQuestion(question) {
			if (confirm('Are you sure you wish to delete this question and all of its answers?')) {
				this.sendAction('destroyQuestion', question);
			}
		}
*/
	}
});
