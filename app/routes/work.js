import Ember from 'ember';

	let work = [{
		id: 'launchpad',
		title: 'Launchpad Central',
		city: 'San Francisco, CA',
		year: 'Aug 2015-present',
		type: 'My role as a Front End Developer consists of producing readable code and using best practices for successful results. I am experienced in ES6, React, Redux, and Immutable.js and I write reusable components to keep our application DRY. I am proficient in JavaScript, HTML, CSS and jQuery. I write unit tests in mocha and integration tests with selenium.I am passionate learner, enjoy solving problems and I follow trending technologies.'
	}, {
		id: 'general-assembly',
		title: 'General Assembly',
		year: 'March 2015- June 2015',
		type: "After completing General Assembly's Web Development Immersive program, I have built a foundation for a future career as a web developer. The 12-week, full-time course covered Full-Stack web development that included languages: Javascript, Ruby, HTML, CSS, Angular.js, Shell, and Git. Frameworks: Node, Express, Ruby on Rails, and other Databases: SQL, PostgreSQL, Sequelize."
	}, {
		id: 'side-projects',
		title: 'Side Projects',
		year: 'March 2015 - Aug 2015',
		projects: [{
			id: 'bepicky',
			title: 'bepicky',
			description: "bepicky is a web application built to search for dishes and the locations. Implemented authentication and authorization for site users and implemented Yelp's API (using OAuth) APIs as the search engine.",
			technologies: 'JavaScript, Node.js, Express, Sequelize, Postgresql, HTML, CSS',
		}, {
			id: 'clean-speech',
			title: 'Clean Speech',
			description: 'CleanSpeech is a web application. It was collaboration project with a group of four people to build a speech recognition application that helps a user track ller words. Users can choose ller words then they can track of and start their speech. After, the user will get results of times they mentioned those words. Separation of sensors phone why is it the whole wide on',
			technologies: 'Ruby, JavaScript, Ruby on Rails, jQuery/AJAX, Postgres, Google speech recognition API',
		}, {
			id: 'loopbird',
			title: 'Loopbird',
			description:"Loopbird is a web application that saves a user's links to articles and videos it is shared via text. Loopbird will remind the user via text message with the link later in the evening.",
			technologies: 'JavaScript, Node.js, Sequelize, Express, Postgres, Twilio API, HTML, CSS'
		}]
	}];




export default Ember.Route.extend({
	model() {
    	return work;
  	}
});
