module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'client/',
          src: ['public/*.css', '!*.min.css'],
          dest: 'client/dist/',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      my_target: {
        files: {
          'client/dist/control.min.js': ['client/public/control.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('build', ['cssmin', 'uglify']);
}