module.exports = {

  directories: {
    src: 'src/',
    projectDirectory: 'src/formsample/',
    buildDirectory: 'build',
    themeBuildDirectory: './build/',
  },

  currentWebsite: 'formsample',
  fractalExternalBuildPrefix: '/',
  autoPrefixerBrowsers: ['last 2 versions', 'ie >= 10', 'Safari >= 9', 'iOS >= 8'],
  bundle: {
    cssBundleName: 'bundle.css',
    jsBundleName: 'bundle.js',
    jsMapName: 'bundle.map.js',
  }
}
