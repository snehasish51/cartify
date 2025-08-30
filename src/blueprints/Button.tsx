import * as React from 'react';
import { Text, Pressable, StyleProp, ViewStyle } from 'react-native';
import { twMerge } from 'tailwind-merge';
import Loader from '../components/loader/Loader';

interface IButtonProps extends React.ComponentProps<typeof Pressable> {
    onPress?: () => void;
    title?: string;
    variant?: 'primary' | 'secondary';
    icon?: React.ReactElement,
    className?: string,
    textClassName?: string,
    isLoading?: boolean,
    loaderColor?: string,
    disabled?: boolean,
    style?: StyleProp<ViewStyle>,
}

const Button: React.FunctionComponent<IButtonProps> = ({ icon, onPress, title, className, textClassName, isLoading = false, loaderColor = '#fff', disabled = false, style, ...props }) => {

    return (
        <Pressable
            disabled={isLoading || disabled}
            onPress={onPress}
            className={twMerge('gap-2 flex-row rounded-[9px] duration-200 h-11 px-3 py-1  flex items-center justify-center transition-all w-full bg-primary dark:bg-zinc-500',
                className,
                (isLoading || disabled) ? 'opacity-50' : ''
            )}
            style={style}
            {...props}
        >
            {isLoading && !title ? <Loader color={loaderColor} size={18} /> : icon && icon}
            {!isLoading && title && <Text className={twMerge('text-center text-white text-md whitespace-nowrap overflow-x-auto font-medium font-geistregular', textClassName)}>{title}</Text>}
            {isLoading && title && <Loader color={loaderColor} size={18} />}
        </Pressable>
    );
};

export default Button;
