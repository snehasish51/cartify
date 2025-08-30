import { useColorScheme } from 'nativewind';
import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    StyleProp,
    View,
    ViewStyle,
} from 'react-native';
import { twMerge } from 'tailwind-merge';

export type BaseLayoutProps = React.PropsWithChildren & {
    style?: StyleProp<ViewStyle>;
    className?: string,
    inverted?: boolean
    isFullScreen?: boolean,
    noOverlay?: boolean,
};

export const BaseLayout = React.memo(({ children, className, inverted, isFullScreen = false }: BaseLayoutProps) => {

    const { colorScheme } = useColorScheme();
    const invertedScheme = inverted ? 'bg-[#0a0a0a], dark:bg-white' : '';
    return (
        <View className={twMerge('flex-1 justify-center bg-[#ffffff] dark:bg-[#0a0a0a] pt-10 ', className, invertedScheme)}>
            <StatusBar
                translucent
                barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
                backgroundColor="transparent"
            />
            <View className={twMerge('flex-1 pt-32', isFullScreen && 'pt-0')}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    className="flex-1 "
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
                >
                    {children}
                </KeyboardAvoidingView>
            </View>
        </View>
    );
});
