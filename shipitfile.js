module.exports = shipit => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      repositoryUrl: 'https://github.com/mrhanlon/mrhanlon.com.git',
      branch: 'astro'
    },
    production: {
      servers: [{
        host: 'mrhanlon.com',
        user: 'mrhanlon'
      }],
      branch: 'astro',
      deployTo: '/var/www/html/mrhanlon-astro',
      dirToCopy: 'dist/',
      keepReleases: 2,
      deleteOnRollback: false,
      shallowClone: true
    }
  });

  shipit.blTask('build', async function() {
    await shipit.local('yarn install', { cwd: shipit.workspace });
    await shipit.local('yarn build', { cwd: shipit.workspace });

    shipit.emit('built');
  });

  shipit.on('fetched', async function() {
    shipit.start('build');
  });
};
