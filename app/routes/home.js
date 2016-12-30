import Ember from 'ember';

	let home = [{
		id: 'javascript',
		title: 'Javascript',
	}, {
		id: 'mid1',
		title: '-',
	}, 
	 {
		id: 'html',
		title: 'HTML',
	},  {
		id: 'mid2',
		title: '-',
	},  {
		id: 'css',
		title: 'CSS',
	}];

export default Ember.Route.extend({
	model() {
    	return home;
  	}
});
