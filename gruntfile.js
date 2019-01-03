module.exports = function(grunt) {
    grunt.initConfig({
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }
        }, 

        uglify: {
            target: {
              files: {
                'js/main.min.js': ['js/main.concat.js']
              }
            }
        },

        concat: {
            dist: {
              src: ['js/main.js', 'js/app.js'],
              dest: 'js/main.concat.js',
            },
        },

        sass: {                              
            dist: {                           
              options: {       
                style: 'expanded'
              },
              files: {    
                'css/style.css': 'sass/main.scss',  
              }
            }
        },

        watch: {
            css: {
                files: ['sass/*.scss'],
                tasks: ['sass', 'cssmin'],
            },

            js: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ["watch"]);
}