'use strict';

const gulp = require('gulp');

gulp.task('hello', (arg) => {

    console.log('\n\tHello World!\n');
    arg(); // callaback for off task

});


gulp.task('default', function (arg) {

    return gulp.src('src/**/*.*')
        .on('data', function (file) {


            console.log(
                {
                    contents: file.contents,
                    path: file.path,
                    cwd: file.cwd,
                    base: file.base,
                    relative: file.relative,
                    dirname: file.dirname,
                    basename: file.basename,
                    stem: file.stem,
                    extname: file.extname,
                }
            );
            console.log('')


        })
        .pipe(gulp.dest( function (file) {

            return file.extname == '.js' ? 'dest/js' :
                   file.extname == '.css' ? 'dest/css' : 'dest'

        } ))

});