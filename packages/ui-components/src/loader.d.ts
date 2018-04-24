/// <reference types="react" />
import React from 'react';
export interface LoaderProps {
    onDark?: boolean;
    large?: boolean;
    small?: boolean;
    centered?: boolean;
}
export declare const Loader: React.SFC<LoaderProps>;
export default Loader;
