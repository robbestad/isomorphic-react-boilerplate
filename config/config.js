var src = 'app';
var build = 'build';

module.exports = {
    nodemon: {
        development: {
            script: 'server/index.js',
            ext: 'js jsx',
            env: {'NODE_ENV': 'development'},
            watch: [
                'app',
                'gulpfile.js',
                'gulp'
            ],
            ignore: [
                'node_modules'
            ]
        }
    },
    delete: {
        src: ["build/**/*","public/bundle.js"]
    }
};
