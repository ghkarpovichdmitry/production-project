import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type webpack from 'webpack';

export function buildCssLoaders (isDev: boolean): webpack.RuleSetRule {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings 'style-loader' or MiniCssExtractPlugin.loader creates separate css files
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:8]'
                            : '[hash:base64:8]'
                    }
                }
            },
            // * Compiles Sass to CSS
            'sass-loader'
        ]
    };
}
