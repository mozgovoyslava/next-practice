declare module '*.svg' {
    import * as React from 'react';
    const Component: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
    export default Component;
}

declare module '*.module.scss' {
    const classes: Record<string, string>;
    export default classes;
}

declare module '*.scss';
declare module '*.sass';
declare module '*.css';
