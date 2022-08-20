const webpack = require('webpack');
module.exports = function override(config, env) {
    config.resolve.fallback = {
        crypto: require.resolve('crypto-browserify'),
        fs: require.resolve('graceful-fs'),
        path: require.resolve('path-browserify'),
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
        constants: require.resolve('constants-browserify'),
        assert: require.resolve('assert')
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    );

    return config;
}