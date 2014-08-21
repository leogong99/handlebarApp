module.exports = function(grunt) {
	var setting = require('./app.json');
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			build: ['styles', 'styles', 'build']
		},
		handlebars: {
			compile: {
				options: {
					namespace: 'JST',
					processName: function(filePath) {
						return filePath.replace(/^templates\//, '').replace(/\.hbs$/, '');
					}
				},

				files: {
					"build/js/templates.js": (function getTemplate(files) {
						console.log(setting);
						//return ['<%= setting.pages[0].template %>'];
						return ["templates/**/*.hbs"];
					})()

				}
			}
		},
		concat: {
			'sass/build.scss': ['templates/index.scss', 'templates/components/person.scss', 'templates/components/email.scss'] //order importent
		},
		sass: { // Task
			dist: { // Target
				options: { // Target options
					style: 'expanded'
				},
				files: {
					'styles/templates.css': 'sass/build.scss'
				}
			}
		},
		watch: {
			stylesheets: {
				files: ["templates/**/*.scss"],
				tasks: ['concat', 'sass']
			},
			template: {
				files: ["templates/**/*.hbs"],
				tasks: ['handlebars']
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['clean', 'handlebars', 'concat', 'sass', 'watch']);
};