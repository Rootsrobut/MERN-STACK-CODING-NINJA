module.exports = function (grunt) {
  // configure task
  grunt.initConfig({
    // specify tasks
    uglify: {
        target:{
            files:{
                "dest/js/main.min.js":["src/js/*.js"]
            }
        }
    },
    // configure minify css
    cssmin:{
        target:{
            files:[
                {
                    expand:true,
                    cwd:"src/css",
                    src:['*.css','!*.min.css'],
                    dest:"dest/css",
                    ext:'.min.css'
                }
            ]
        }
    }
  });
  // Load libraries
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // Setting up tasks
  grunt.registerTask('default', ['uglify','cssmin']);
  
};
