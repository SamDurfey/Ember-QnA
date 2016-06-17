import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
	author: attr(),
	title: attr(),
	body: attr(),
	answers: hasMany('answer', { async: true }),
	timeStamp: attr()
});
