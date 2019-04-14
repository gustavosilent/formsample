const gulp = require('gulp')
const plugins = require('gulp-load-plugins')()

const config = require('./tasks/config')

/**
 * @desc Helper function to retrieve a
 * gulp task from the gulp task Directory
 *
 * @param  {string} task
 * @returns function The corresponding gulp task
 */
function getTask(task) {
  return require(`./tasks/gulp/${task}`)(gulp, plugins)
}

/**
 * Here we define all available gulp tasks
 */
gulp.task('scripts', getTask('scripts'))
gulp.task('eslint', getTask('eslint'))
gulp.task('styles', getTask('styles'))
gulp.task('fractal', getTask('fractal'))

/**
 * Build tasks
 */
gulp.task('build', ['eslint', 'scripts', 'styles'])

/** Develop tasks */

gulp.task('watch', ['build'], () => {
  gulp.watch([`${config.directories.projectDirectory}**/*.js`], ['eslint', 'scripts'])
  gulp.watch([`${config.directories.projectDirectory}**/*.vue`], ['eslint', 'scripts'])
  gulp.watch([`${config.directories.projectDirectory}**/*.scss`], ['styles'])
})

gulp.task('develop', ['watch', 'fractal'])
