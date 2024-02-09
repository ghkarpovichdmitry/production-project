import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export default function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [{ loader: 'file-loader' }]
    };

    // If we don't use TS we need to add Babel-loader
    const tsLoader = { // need to keep in variables because order does matter here
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    const stylesLoader = buildCssLoaders(isDev);
    const babelLoader = buildBabelLoader(options);

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        tsLoader,
        stylesLoader
    ];
}
