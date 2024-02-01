import type webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { type buildEnv, type BuildPaths } from './config/build/types/config';
import path from 'path';

export default (env: buildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    };

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;
    const apiURL = env.apiURL || 'http://localhost:8000'; // Backend  URL

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiURL
    });

    return config;
};
