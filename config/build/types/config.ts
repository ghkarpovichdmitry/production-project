export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    entry: string
    build: string
    html: string
    src: string
}

export interface buildEnv {
    mode: BuildMode
    port: number
    apiURL: string
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    port: number
    apiURL: string
    project: 'storybook' | 'frontend' | 'jest'
}
