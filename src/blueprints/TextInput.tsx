import * as React from 'react';
import { TextInput as RNInput, TextInputProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface InputProps extends TextInputProps {
    value?: string;
    className?: string;
}

const TextInput: React.FC<InputProps> = ({
    className,
    onChangeText,
    value,
    ...rest
}) => {
    return (
        <RNInput
            className={twMerge(
                'border-2 dark:border-zinc-800 border-zinc-300 rounded-[9px] py-2 px-4 text-black dark:text-white focus:border-blue-500',
                className
            )}
            value={value?.toString()}
            onChangeText={(text) => onChangeText?.(text)}
            {...rest}
        />
    );
};

export default TextInput;
