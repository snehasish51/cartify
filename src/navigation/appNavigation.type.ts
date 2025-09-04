import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum Screen {
    LOGIN = 'Login',
    SIGNUP = 'Signup',
    FORGOT_PASSWORD = 'ForgotPassword',
    HOME = 'Home',
    RESEND_EMAIL_VERIFICATION = 'ResendEmailVerification',
}

export type NavStackParams = {
    [Screen.LOGIN]: undefined;
    [Screen.SIGNUP]: undefined;
    [Screen.FORGOT_PASSWORD]: undefined;
    [Screen.HOME]: undefined;
    [Screen.RESEND_EMAIL_VERIFICATION] : { user: FirebaseAuthTypes.User };
};

export type AppNavigationProp = NativeStackNavigationProp<NavStackParams>;
