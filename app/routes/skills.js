import Ember from 'ember';

	let skills = [{
		id: 'languages',
		title: 'LANGUAGES',
		type: 'JavaScript/ES6, React, jQuery, HTML, CSS, SASS'
	}, {
		id: 'frameworks',
		title: 'FRAMEWORKS',
		type: 'React, Redux, Foundation, Bootstrap, Node, Enzyme, Mochai, Chai, Nightwatch, Handlebars, Beginner Ember'
	}, {
		id: 'other-skills',
		title: 'OTHER SKILLS',
		type: 'Git, Heroku, MongoDB, Bootstrap, Photoshop, Illustrator, InDesign, Fluent in Spanish and English.'
	}];

export default Ember.Route.extend({
	model() {
    	return skills;
  	}
});
