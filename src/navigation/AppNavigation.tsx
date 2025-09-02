import React, { } from 'react';
import { createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavStackParams, Screen } from './appNavigation.type';
import auth from '@react-native-firebase/auth';
import { View } from 'react-native';
import { useState } from 'react';
import LoginScreen from '../screens/onBoarding/LoginScreen';
import ForgotPassword from '../screens/onBoarding/ForgotPassword';
import Loader from '../components/loader/Loader';
import SignUp from '../screens/onBoarding/SignUp';
import ResendEmailVerification from '../screens/onBoarding/ResendEmailVerification';
import HomeScreen from '../screens/home/HomeScreen';
export const navigationRef = createNavigationContainerRef<NavStackParams>();
const Stack = createNativeStackNavigator<NavStackParams>();
const AppNavigation = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<any>(null);
    React.useEffect(() => {
        const subscriber = auth().onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);
            if (initializing) {
                setInitializing(false);
            }
        });

        // 🔄 Keep checking if email gets verified
        const interval = setInterval(async () => {
            if (auth().currentUser && !auth().currentUser?.emailVerified) {
                await auth().currentUser?.reload();
                setUser(auth().currentUser);
            }
        }, 5000);

        return () => {
            subscriber();
            clearInterval(interval);
        };
    }, [initializing]);


    if (initializing) {
        return (
            <View className="items-center justify-center">
                <Loader />
            </View>
        );
    }
    console.log('user app', user);
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user ? (
                user.emailVerified ? (
                    <Stack.Screen name={Screen.HOME} component={HomeScreen} />
                ) : (
                    <Stack.Screen name={Screen.RESEND_EMAIL_VERIFICATION} component={ResendEmailVerification}
                        initialParams={{ user }}
                    />
                )
            ) : (
                <>
                    <Stack.Screen name={Screen.LOGIN} component={LoginScreen} />
                    <Stack.Screen name={Screen.FORGOT_PASSWORD} component={ForgotPassword} />
                    <Stack.Screen name={Screen.SIGNUP} component={SignUp} />
                </>
            )}
        </Stack.Navigator>
    );
};

export default AppNavigation;
