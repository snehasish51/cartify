import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { useColorScheme } from 'nativewind';
import AppNavigation, { navigationRef } from './navigation/AppNavigation';


interface MainAppProps {
}

const MainApp: React.FunctionComponent<MainAppProps> = () => {
    const { colorScheme } = useColorScheme();
    return (
        <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme} ref={navigationRef}>
            <AppNavigation />
        </NavigationContainer>

    );

};

export default MainApp;

