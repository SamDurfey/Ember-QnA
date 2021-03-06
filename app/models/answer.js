import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
	author: attr(),
	body: attr(),
	question: belongsTo('question', { async: true }),
	timeStamp: attr()
});
