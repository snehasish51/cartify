import * as React from 'react';
import {
    View,
    ViewProps,
} from 'react-native';
import { twMerge } from 'tailwind-merge';



export const CardContent = ({ className, children, style, ...props }: ViewProps) => {
    return (
        <View {...props} className={twMerge('p-4', className)} style={style}>
            {children}
        </View>
    );
};

export const Card = ({ children, style, className, ...props }: ViewProps) => {
    return (
        <View
            className={twMerge('bg-neutral-100 dark:bg-neutral-900 rounded-xl relative', className)}
            style={style}
            {...props}
        >
            {children}
        </View>
    );
};
