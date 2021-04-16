const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const minfy = require('gulp-clean-css');
const rename = require('gulp-rename');

// function
function compilesass() {
    return src('./app/sass/main.sass')
        .pipe(sass())
        .pipe(prefix())
        .pipe(minfy())
        .pipe(rename(function (path) {
            return {
                dirname: path.dirname + "",
                basename: path.basename + ".min",
                extname: ".css"
            };
        }))
    .pipe(dest('./app/css'))
};

// watchtask
function watchTask(){
    watch('./app/sass/**/*.sass', compilesass)
}

// default gulp
exports.default = series(
    compilesass,
    watchTask
);