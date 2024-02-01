import { DefinePlugin, type RuleSetRule } from 'webpack';
import type webpack from 'webpack';
import { type BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: { config: webpack.Configuration }): any => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    };

    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');

    const rules = config.module!.rules as RuleSetRule[];
    config.module!.rules = rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    config.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    });

    config.module!.rules.push(buildCssLoaders(true));

    config.plugins!.push(new DefinePlugin({
        _IS_DEV_: true,
        _API_: ''
    }));

    return config;
};
