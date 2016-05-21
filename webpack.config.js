const production = process.env.NODE_ENV === 'production';

module.exports = {
    debug:   !production,
    devtool: production ? false : 'eval-source-map',
    entry  : './src/app.js',
    output : {
        path     : './static',
        filename : 'app.dist.js'
    },
    module : {
        loaders: [
            {
                exclude: /node_modules/,
                loader : 'babel-loader',
                test   : /.jsx?$/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                loader: 'json',
                test: /\.json$/,
            },
        ]
    }
};

