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
	},  {
		id: 'mid3',
		title: '-',
	},  {
		id: 'jquery',
		title: 'jQuery',
	}];

export default Ember.Route.extend({
	model() {
    	return home;
  	}
});
