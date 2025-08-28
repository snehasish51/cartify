import { useColorScheme } from 'nativewind';
import React from 'react';
import {
    Animated,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    StyleProp,
    StyleSheet,
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

export const BaseLayout = React.memo(({ children, className, inverted, isFullScreen = false, noOverlay = false }: BaseLayoutProps) => {

    const { colorScheme } = useColorScheme();
    const invertedScheme = inverted ? 'bg-[#0a0a0a], dark:bg-white' : '';
    const backgroundOpacity = React.useRef(new Animated.Value(0)).current;

    return (
        <View className={twMerge('flex-1 justify-center bg-[#ffffff] dark:bg-[#0a0a0a]', className, invertedScheme)}>
            <StatusBar
                translucent
                barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
                backgroundColor="transparent"
            />

            {/* Status bar overlay */}
            {!noOverlay && (
                <Animated.View
                    style={[styles.statusBarOverlay, {
                        backgroundColor: backgroundOpacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [
                                'rgba(255, 255, 255, 0)', // Transparent
                                colorScheme === 'dark'
                                    ? 'rgba(17, 17, 17, 0.85)' // Dark translucent
                                    : 'rgba(255, 255, 255, 0.85)',// Light translucent
                            ],
                        }) as any,
                    }]}
                />
            )}


            <View className={twMerge('flex-1 pt-32', isFullScreen && 'pt-0')}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    className="flex-1"
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
                >
                    {children}
                </KeyboardAvoidingView>
            </View>
        </View>
    );
});


const styles = StyleSheet.create({
    statusBarOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        zIndex: 999,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
    },
});


//Backup dark bg color: #0a0a0a
