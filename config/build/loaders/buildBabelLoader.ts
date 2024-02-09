import { type BuildOptions } from '../types/config';
import type webpack from 'webpack';

export const buildBabelLoader = ({ isDev }: BuildOptions): webpack.RuleSetRule => ({
    test: /\.(?:js|mjs|cjs|tsx|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            plugins: [
                isDev && require.resolve('react-refresh/babel')
            ].filter(Boolean),
            presets: [
                ['@babel/preset-env', { targets: 'defaults' }]
            ]
        }
    }
});
