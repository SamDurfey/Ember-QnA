import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
	author: attr(),
	title: attr(),
	body: attr(),
	answers: hasMany('answer', { async: true }),
	hasMultipleAnswers: function() {
		return this.get('answers.length') > 1;
	}.property('answers')
});
