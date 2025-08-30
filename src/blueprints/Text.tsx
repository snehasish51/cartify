import * as React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { twMerge } from 'tailwind-merge';


interface ITextProps extends TextProps {
}

const Text: React.FunctionComponent<ITextProps> = ({ children, className, ...rest }) => {

    return (
        <RNText className={twMerge('text-gray-700 dark:text-gray-200 font-geistmedium', className, )} {...rest}>
            {children}
        </RNText>
    );
};

export default Text;
