module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat_css: {
			all: {
				src: ["src/scss/body.css","!src/scss/*.min.css"],
				dest: "public/css/main.css"
			}
		},
		connect: {
			start: {
				options: {
					base: "public/",
					keepalive: false
				}
			}
		},
		cssmin: {
			options: {
				processImport: true,
				relativeTo: "./"
			},
			target: {
				expand: true,
				cwd: "src/",
				src: ["scss/*.css","!scss/*.min.css"],
				dest: 'src/',
				ext: '.min.css'
			}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: [{
					expand: true,
					cwd: 'src/',
					src: ["scss/*.scss"],
					dest: 'src/',
					ext: '.css'
				}]
			}
		},
		copy: {
			main: {
				files: [
					{expand: true, cwd: 'src/html/', src: ['*.html'], dest: 'public/html', filter: 'isFile'}
				]
			}
		},
		watch: {
			livereload: {
				options: {
					livereload: true,
				},
				files: ['./index.html','**/*']
			},
			concat_css: {
				files: ['src/scss/**/*.css'],
				tasks: ['concat_css:all']
			},
			cssmin: {
				files: ['src/*.css','!src/*.min.css'],
				tasks: ['cssmin:target']
			},
			sass: {
				files: ['**/*.scss'],
				tasks: ['sass:dist']
			},
			copy: {
				files: ['src/html/*.html'],
				tasks: ['copy:main']
			}
		}
	});

	grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('start', ['connect:start','watch']);

}