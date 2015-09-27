'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

  	config: {
  		src: 'src',
  		dist: 'dist'
  	},

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'dist/js/scripts.min.js'
      }
    },

    uglify: {
      build: {
        src: 'dist/js/scripts.min.js',
        dest: 'dist/js/scripts.min.js'
      }
    },

  	sass: {
  		dist: {
  			files: {
  				'<%= config.src %>/css/build/styles.css' : '<%= config.src %>/css/scss/styles.scss'
  			}
  		}
  	},

  	watch: {
  		assemble: {
  		files: ['<%= config.src %>/{content,data,templates,css/scss,js}/{,*/}*.{md,hbs,yml,scss,js}'],
  		tasks: ['build']
  	},
  	livereload: {
  		options: {
  			livereload: '<%= connect.options.livereload %>'
  		},
  		files: [
  			'<%= config.dist %>/{,*/}*.html',
  			'<%= config.dist %>/{,*/}*.scss',
				'<%= config.dist %>/{,*/}*.js',
				'<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
				]
			}
		},

		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: '<%= config.src %>/css/build',
					src: ['*.css', '!*.min.css'],
					dest: '<%= config.src %>/css/build',
					ext: '.min.css'
				}]
			}
		},

		autoprefixer: {
			dev: {
				files: {
					'<%= config.dist %>/css/styles.css': ['<%= config.src %>/css/build/styles.css']
				}
			}
		},

		connect: {
			options: {
				port: 9001,
				livereload: 35729,
		    // change this to '0.0.0.0' to access the server from outside
		    hostname: 'localhost'
		  },
		  livereload: {
		  	options: {
		  		open: true,
		  		base: [
		  		'<%= config.dist %>'
		  		]
		  	}
		  }
		},

    copy: {
      images: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/images/',
            src: ['**/*.{png,jpg,svg}'],
            dest:'<%= config.dist %>/mimages/'
          }
        ]
      },

      scripts: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/js/vendor',
            src: ['**/*.js'],
            dest:'<%= config.dist %>/js/vendor/'
          }
        ]
      }
    },
	});

	grunt.registerTask('default', [
		'build',
		'connect:livereload',
		'watch'
	]);

	grunt.registerTask('build', [
		'concat',
		'uglify',
		'sass',
		'autoprefixer',
		'cssmin',
		'copy'
  ]);
};
