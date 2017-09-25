'use strict';

const gulp = require('gulp');

gulp.task('hello', (arg) => {

    console.log('\n\tHello World!\n');
    arg();

});


gulp.task('default', function (arg) {

    console.log('default');

});