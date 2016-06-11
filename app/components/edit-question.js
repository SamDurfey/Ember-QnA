import Ember from 'ember';

export default Ember.Component.extend({
	editFormIsShowing: false,
	actions: {
		showEditForm() {
			this.set('editFormIsShowing', true);
		},
		update(question) {
			var params = {
				author: this.get('author'),
				title: this.get('title'),
				body: this.get('body')
			};
			this.set('editFormIsShowing', false);
			this.sendAction('update', question, params);
		},
	}
});
