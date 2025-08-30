import * as React from 'react';
import { View } from 'react-native';
import Text from './Text';
import { twMerge } from 'tailwind-merge';

interface IBadgeProps {
    text?: string;
    color?: string;
    type?: 'error' | 'success' | 'warning' | 'primary' | 'muted',
    className?: string
}

const Badge: React.FunctionComponent<IBadgeProps> = ({ text, type, color, className }) => {

    const resolveTheme = () => {
        let classes = '';

        switch (type) {
            case 'error':
                classes = 'text-red-500 dark:text-red-500 bg-red-500/15';
                break;
            case 'success':
                classes = 'text-green-600 dark:text-green-600 bg-green-500/15';
                break;
            case 'warning':
                classes = 'text-yellow-600 dark:text-yellow-600 bg-yellow-500/15';
                break;
            case 'primary':
                classes = 'text-blue-600 dark:text-blue-600 bg-blue-500/15';
                break;
            case 'muted':
                classes = 'text-zinc-900 dark:text-white bg-zinc-400/15';
                break;
            default:
                classes = '';
                break;
        }

        if (color) {
            classes = `text-${color}-500 dark:text-${color}-500 bg-${color}-500/15`;
        }

        return classes;

    };

    return (
        <View className="flex flex-row" >
            <Text className={twMerge('text-center py-1 text-sm bg-red-500/15 flex-shrink min-w-[40px] rounded-[9px] px-3 ', resolveTheme(), className)}>{text}</Text>
        </View>
    );
};

export default Badge;
