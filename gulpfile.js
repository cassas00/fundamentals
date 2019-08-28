const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('dev', function () {
    if (browserSync.active) {
        return;
    }
    
    browserSync.init({
        server: "./",
        port: 3000,
        files: [
            "./"
        ],
        ghostMode: {
            clicks: true,
            location: false,
            forms: true,
            scroll: true
        },
        injectChanges: true,
        logFileChanges: true,
        logLevel: 'debug',
        logPrefix: 'gulp-patterns',
        notify: true,
        reloadDelay: 0
    });
});

