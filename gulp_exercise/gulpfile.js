const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');


function compressImages() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function compressJs() {
    return gulp.src('./source/script/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/script'))
}

function compileSass() {
    return gulp.src('./source/style/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/style'));
};

exports.default = function() {
    gulp.watch('./source/style/*.scss', {ignoreInitial: false}, gulp.series(compileSass));
    gulp.watch('./source/script/*.js', {ignoreInitial: false}, gulp.series(compressJs));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(compressImages));
}