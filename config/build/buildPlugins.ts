import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { type BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

export default function buildPlugins (
    { paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    // const addRefreshPlugin = (): any => {
    //     return isDev ? [new ReactRefreshWebpackPlugin()].filter(Boolean) : null
    // };

    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            _IS_DEV_: JSON.stringify(isDev)
        }),
        new webpack.HotModuleReplacementPlugin()
    // addRefreshPlugin,
    ];
}
