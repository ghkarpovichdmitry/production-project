declare module '*.module.css';
declare module '*.module.scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import type React from 'react';
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const _IS_DEV_: boolean;
