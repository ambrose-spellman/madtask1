const gulp = require('gulp');
const gulpIf = require('gulp-if');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyjs');
const data = require('gulp-data');
const prettify = require('gulp-html-prettify');
// const spritesmith = require("gulp.spritesmith");
// const svgSprite = require('gulp-svg-sprite');
// const svgmin = require('gulp-svgmin');
// const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const autoprefixer = require('gulp-autoprefixer');

var path = {
    build: {
        html: 'app/',
        js: 'app/js/',
        css: 'app/styles/',
        img: ['app/images/','app/uploads/'],
        // svg: 'build/static/img/svg/',
        // sprite: 'build/static/img/sprite/',
        fonts: 'app/fonts/'
    },
    src: {
        html: 'app/pages/*.pug',
        js: [
            'app/js/*.js'
        ],
        css: 'app/sass/',
        img: ['app/images/','app/uploads/'],
        fonts: 'app/fonts/**/*.*'
    },
    watch: {
        html: 'app/pages/**/*.pug',
        js: 'app/js/**/*.js',
        css: 'app/sass/style.sass',
        img: [
            'app/images/**/*',
            'app/uploads/**/*',
            // '!src/static/img/sprite/*',
            // '!src/static/img/svg/*'
        ],
        // svg: 'src/static/img/svg/*.svg',
        // sprite: 'src/static/img/sprite/*',
    },
    clean: './app'
};

gulp.task('serve', function() {
    browserSync.init({
        server: 'app'
    })
    browserSync.watch('app/**/*.*').on('change', browserSync.reload);
})


function requireUncached($module){
	delete require.cache[require.resolve($module)];
	return require ($module);
};

gulp.task('pug', function() {
    return gulp.src(path.src.html)
      .pipe(data(function(file){
          return requireUncached('./app/pages/data/data.json')
      }))
      .pipe(plumber())
      .pipe(pug({
          pretty: true
      }))
      .on("error", notify.onError(function(error) {
          return "Message to the notifier: " + error.message;
      }))
      .pipe(prettify({indent_char: ' ', indent_size: 4}))
      .pipe(gulp.dest(path.build.html));
});

gulp.task('scripts', function() {
    gulp.src(['app/js/*.js','!app/js/*min.js'])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js));
});

gulp.task('styles', function() {
    return gulp.src(path.watch.css)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .on("error", notify.onError(function(error) {
            return "Message to the notifier: " + error.message;
        }))
        .pipe(autoprefixer(['last 5 version']))
        .pipe(gulp.dest(path.build.css));
});

// gulp.task('svg', function() {
//     return gulp.src(path.watch.svg)
//         .pipe(svgmin({
//             js2svg: {
//                 pretty: true
//             }
//         }))
//         .pipe(cheerio({
//             run: function($) {
//                 $('[fill]').removeAttr('fill');
//                 $('[stroke]').removeAttr('stroke');
//                 $('[style]').removeAttr('style');
//             },
//             parserOptions: { xmlMode: true }
//         }))
//         .pipe(replace('&gt;', '>'))
//         .pipe(svgSprite({
//             mode: {
//                 symbol: {
//                     sprite: "sprite.svg"
//                 }
//             }
//         }))
//         .pipe(gulp.dest(path.build.svg));
// });

// gulp.task('tinypng', function() {
//     return gulp.src(path.watch.img)
//         .pipe(tinypng('ZW8nIAmNF_pB0hlpyWMhqIdzhNC2KmaD'))
//         .pipe(gulp.dest(path.build.img));
// });

// gulp.task('cleansprite', function() {
//     return del.sync(path.src.img + 'sprite/sprite.png');
// });

// gulp.task('spritemade', function() {
//     var spriteData =
//         gulp.src(path.src.img + 'sprite/*.*')
//         .pipe(spritesmith({
//             imgName: 'sprite.png',
//             cssName: '_sprite.styl',
//             padding: 15,
//             cssFormat: 'stylus',
//             algorithm: 'binary-tree',
//             cssTemplate: 'stylus.template.mustache',
//             cssVarMap: function(sprite) {
//                 sprite.name = 's-' + sprite.name;
//             }
//         }));

//     spriteData.img.pipe(gulp.dest(path.build.sprite));
//     spriteData.css.pipe(gulp.dest(path.src.css));
// });

// gulp.task('sprite', gulp.series(gulp.parallel('cleansprite', 'spritemade'), function() {

// }));


gulp.task('clean', function() {
    return del(path.clean);
});

gulp.task('fonts:build', function() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

gulp.task('js:build', function() {
    return gulp.src(path.src.js)
        .pipe(gulp.dest(path.build.js));
});

// gulp.task('watch', function() {
//     gulp.watch('src/app/sass/**/*.sass', gulp.series('styles'));
//     gulp.watch(path.watch.html, gulp.series('pug'));
//     gulp.watch(path.src.js, gulp.series('scripts', gulp.parallel('js:build')));
//     // gulp.watch(path.watch.svg, gulp.series('svg'));
//     // gulp.watch(path.watch.sprite, gulp.series('sprite'));
// })

gulp.task('watch', function(){
	gulp.watch('app/sass/**/*.sass', ['styles']);
	gulp.watch('app/pages/**/*.pug', ['pug']);
	gulp.watch('app/pages/data/data.json', ['pug']);
});

// gulp.task('build', gulp.series(
//     'clean',
//     gulp.parallel('styles', 'pug', 'scripts',  'fonts:build', 'js:build')))



// gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));
gulp.task('default', ['styles','pug','watch','serve'] );
gulp.task('final',['images','scripts'])