const gulp = require('gulp');
const compress = require('compression');
const twig = require('gulp-twig');
const browserSync = require('browser-sync');

// 静态服务器
gulp.task('browser-sync',()=>{
    browserSync.init({
        server:{
            baseDir:"./",
            middleware:function (req,res,next) {
                const gzip = compress();
                gzip(req,res,next)
            }
        }
    })
})

gulp.task('watch',()=> {
    gulp.watch('src/**', gulp.series('compile:twig'))
})

// twig 编译成 html
gulp.task('compile:twig',()=>{
    return gulp.src('./src/views/index.twig')
        .pipe(twig({}))
        .pipe(gulp.dest('./'))
})

