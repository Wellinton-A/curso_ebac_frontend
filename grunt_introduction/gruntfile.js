const { task } = require("grunt");

module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'dev/style/main.css' : 'src/style/main.less'
                },
                options: {
                    path: ['less'],
                    sourceMap: true,
                    sourceMapFilename: 'dev/style/main.css.map',
                    sourceMapURL: 'main.css.map'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'dist/style/main.min.css' : 'src/style/main.less'
                }
            }
        },
        watch: {
            styles: {
                files: ['src/style/**/*.less'],
                tasks: ['less:development']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }

        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'CSS',
                            replacement: './style/main.css'
                        },
                        {
                            match: 'JS',
                            replacement: '../src/script/script.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'CSS',
                            replacement: './style/main.min.css'
                        },
                        {
                            match: 'JS',
                            replacement: './script/script.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'prebuild/index.html' : 'src/index.html'
                }
            }
        },
        clean: ['prebuild'],
        uglify: {
            my_target: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'dist/script/script.min.js.map'
                },
                files: {
                    'dist/script/script.min.js' : ['src/script/script.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-replace')
    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('default', ['less:development','replace:dev', 'watch']);
    grunt.registerTask('build', ['less:production', 'htmlmin', 'replace:dist', 'clean', 'uglify']);
};