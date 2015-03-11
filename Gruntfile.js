module.exports = function(grunt) {

	grunt.initConfig({
		bump: {
			options: {
				pushTo: 'origin',
				files: ['package.json', 'bower.json'],
				commitFiles: ['package.json', 'bower.json']
			}
		}
	});

	grunt.loadNpmTasks('grunt-bump');
};
