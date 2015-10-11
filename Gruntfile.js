'use strict';

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: './'
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['<%= config.src %>/js/*.js'],
        dest: '<%= config.dist %>/js/scripts.js'
      }
    },

    uglify: {
      build: {
        src: '<%= config.dist %>/js/scripts.js',
        dest: '<%= config.dist %>/js/scripts.min.js'
      }
    },

    sass: {
      dist: {
        files: {
          '<%= config.src %>/css/styles.css' : '<%= config.src %>/css/scss/styles.scss'
        }
      }
    },

    watch: {
      assemble: {
      files: ['<%= config.src %>/{content,data,templates/pages,templates/partials,css/scss,js}/{,*/}*.{md,hbs,yml,scss,js}'],
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
      cwd: '<%= config.src %>/css/',
      src: ['*.css', '!*.min.css'],
      dest: '<%= config.src %>/css/',
      ext: '.min.css'
    }]
  }
},

autoprefixer: {
  dev: {
    files: {
      '<%= config.src %>/css/styles.css': ['<%= config.src %>/css/styles.css']
    }
  }
},

connect: {
  options: {
    port: 9000,
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

    assemble: {
      pages: {
        options: {
          expand: true,
          assets: '<%= config.dist %>/assets',
          layout: 'default.hbs',
          layoutdir: '<%= config.src %>/templates/layouts/',
          data: '<%= config.src %>/data/*.{json,yml}',
          helpers: ['<%= config.src %>/templates/helpers/**/*.js'],
        partials: '<%= config.src %>/templates/partials/{,*/}*.hbs'
      },
      files: [{
        expand: true,
        cwd: '<%= config.src %>/templates/pages',
        src: ['**/*.hbs'],
        dest: '<%= config.dist %>'
      }]
    }
  },

  copy: {
    theme: {
      expand: true,
      cwd: '<%= config.src %>/css/',
      src: '**/*.{css,eot,ttf,woff,svg}',
      dest: '<%= config.dist %>/css/'
    },
    images: {
      expand: true,
      cwd: '<%= config.src %>/images',
      src: '**',
      dest: '<%= config.dist %>/images'
    },
    video: {
      expand: true,
      flatten: true,
      cwd: '<%= config.src %>/templates/assets/video',
      src: '**',
      dest: '<%= config.dist %>/video'
    },
    audio: {
      expand: true,
      flatten: true,
      cwd: '<%= config.src %>/templates/assets/audio',
      src: '**',
      dest: '<%= config.dist %>/audio'
    },
    scripts: {
      cwd: '<%= config.src %>/js/vendor',
      src: '**',
      dest: '<%= config.dist %>/js/vendor',
      expand: true,
    }
  },

  'gh-pages': {
    options: {
      base: './',
      add: true
    },
    src: ['**']
  },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dist %>/**/*.{html,xml}']

  });

grunt.loadNpmTasks('assemble');

grunt.registerTask('default', [
  'build',
  'connect:livereload',
  'watch'
  ]);

grunt.registerTask('build', [
  'clean',
  'concat',
  'uglify',
  'sass',
  'autoprefixer',
  'cssmin',
  'copy',
  'assemble'
  ]);

grunt.registerTask('publish', ['gh-pages']);

};
