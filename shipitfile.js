module.exports = shipit => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      repositoryUrl: 'https://github.com/mrhanlon/mrhanlon.com.git',
      branch: 'main',
    },
    production: {
      servers: [{
        host: 'mrhanlon.com',
        user: 'mrhanlon',
      }],
      branch: 'main',
      deployTo: '/var/www/html/mrhanlon-nextjs',
      dirToCopy: 'out/',
      keepReleases: 2,
      deleteOnRollback: false,
      shallowClone: true,
    },
  });

  shipit.blTask('build', async function() {
    await shipit.local('yarn install', {cwd: shipit.workspace});
    await shipit.local('yarn export', {cwd: shipit.workspace});

    shipit.emit('built')
  })

  shipit.on('fetched', async function() {
    shipit.start('build');
  });
}
