import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum Screen {
    LOGIN = 'Login',
    // SIGNUP = 'Signup',
    // FORGOT_PASSWORD = 'ForgotPassword',
    HOME = 'Home',
}

export type NavStackParams = {

    [Screen.LOGIN]: undefined;
    // [Screen.SIGNUP]: undefined;
    // [Screen.FORGOT_PASSWORD]: undefined;
    [Screen.HOME]: undefined;
};

export type AppNavigationProp = NativeStackNavigationProp<NavStackParams>;
