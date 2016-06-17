import Ember from 'ember';
import moment from 'moment';

export function howLongAgo(params/*, hash*/) {
  var object = params[0];
  // console.log(object.get('timeStamp'))
  return moment(object.get('timeStamp'), 'h:mm a, MMMM Do, YYYY').fromNow();

}

export default Ember.Helper.helper(howLongAgo);
