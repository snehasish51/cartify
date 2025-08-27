import React, { } from 'react';
import { createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavStackParams, Screen } from './appNavigation.type';
import auth from '@react-native-firebase/auth'; // 👈 make sure you installed this
import { View, Text, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import HomeScreen from '../screens/home\'/HomeScreen';
import LoginScreen from '../screens/onBoarding/LoginScreen';


export const navigationRef = createNavigationContainerRef<NavStackParams>();
const Stack = createNativeStackNavigator<NavStackParams>();
const AppNavigation = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<any>(null);

    React.useEffect(() => {
        const subscriber = auth().onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);
            if (initializing) setInitializing(false);
        });

        return subscriber;
    }, []);

    if (initializing) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
    console.log("user",user)
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user ? (
                <Stack.Screen name={Screen.HOME} component={HomeScreen} />
            ) : (
                <>
                    <Stack.Screen name={Screen.LOGIN} component={LoginScreen} />
                    {/* <Stack.Screen name={Screen.SIGNUP} component={SignupScreen} />
          <Stack.Screen name={Screen.FORGOT_PASSWORD} component={ForgotPasswordScreen} /> */}
                </>
            )}
        </Stack.Navigator>
    );
};

export default AppNavigation;
