var gulp = require('gulp'),
	ejs = require('gulp-ejs'),
	clean = require('gulp-clean'),
	webServer = require('gulp-webserver'),
	plumber = require('gulp-plumber'),
	del = require('del'),
	runSequence = require('run-sequence'),
	sass = require('gulp-sass');

gulp.task('ejs', function () {
	return gulp.src(
		[
			"src/**/*.html",
			"src/**/*.js",
			"!" + "src/_parts/**/*.ejs",
			"!" + "src/_guide/**/*.ejs"
		],{
			base: 'src'
		})
		.pipe(plumber())
		.pipe(ejs({}, {ext: '.html'}))
		.pipe(gulp.dest('build'));
});

// sass
var sassOptions = {
	outputStyle: 'expanded'
};
gulp.task('sass', function() {
	return gulp.src(['src/assets/scss/**/*.scss', '!' + 'src/assets/scss/**/*_.scss'])
		.pipe(plumber())
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(gulp.dest('build/assets/css/'))
});

gulp.task('clean', function(cb) {
	return del('build', cb);
});

gulp.task("copy", function () {
	return gulp.src(
		[
		"src/assets/**/*.css",
		"src/assets/**/*.js",
		"src/**/**/*.png",
		"src/**/**/*.jpg",
		"src/**/**/*.svg",
		"src/**/**/*.jpeg",
	],{
			base: 'src'
		})
		.pipe(gulp.dest("build"));
});

gulp.task("copy:htPass", function() {
	return gulp.src('src/.htpasswd')
		.pipe(gulp.dest('build/'))
});

// watch
gulp.task('watch', function () {
	gulp.watch(['src/**/*.html', 'src/**/*.ejs', 'src/**/*.js'], ['ejs']);
	gulp.watch(['src/**/*.scss'], ['sass']);
});

// webServer
var webServerOptions = {
	host: '0.0.0.0',
	port: 8000,
	open: false,
	fallback: 'index.html'
};
gulp.task('webServer', function () {
	return gulp.src('build/')
		.pipe(webServer(webServerOptions))
});

// build task
var buildTasks = [
	'copy:htPass', 'ejs', 'copy', 'sass'
];
gulp.task('build', ['clean'], function() {
	return runSequence(buildTasks);
});

// default
gulp.task('default', function(cb) {
	return runSequence(
		['build', 'webServer'],
		'watch',
		cb
	)
});
