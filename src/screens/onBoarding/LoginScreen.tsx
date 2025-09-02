import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { BaseLayout } from '../../components/layout/BaseLayout';
import Text from '../../blueprints/Text';
import { contents } from '../../i18n/locales/contents';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import TextInput from '../../blueprints/TextInput';
import Badge from '../../blueprints/Badge';
import Button from '../../blueprints/Button';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProp, Screen } from '../../navigation/appNavigation.type';
import { yupResolver } from '@hookform/resolvers/yup';
import { Login } from '../../types/Auth';
import { signInWithEmailAndPassword } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';

const schema = yup.object().shape({
  email: yup
    .string()
    .required(contents('error.this_field_can_not_be_empty'))
    .email(contents('error.invalid_email')),

  password: yup
    .string()
    .required(contents('error.this_field_can_not_be_empty'))
    .min(8, contents('error.password_instruction'))
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      contents('error.password_instruction'),
    ),
});

const LoginScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const [isLoading, setIsloading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const { formState: { errors }, control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: Login) => {
    setIsloading(true);
    setLoginError('');
    console.log('data', data);

    try {
      const userCredential = await signInWithEmailAndPassword(auth(), data.email, data.password);
      const user = userCredential.user;
      setIsloading(false);
      console.log('user', user);
    }
    catch (error:any) {
      console.log('error', error.code);
      setIsloading(false);
      if (error.code === 'auth/user-not-found') {
       setLoginError(contents('error.no_account_found_with_this_email'));
      } else if (error.code === 'auth/invalid-credential') {
        setLoginError(contents('error.incorrect_credentials'));
      } else if (error.code === 'auth/invalid-email') {
        setLoginError(contents('error.invalid_email_address'));
      } else {
        setLoginError(contents('error.login_failed_please_try_again'));
      }
    }
  };


  return (
    <BaseLayout className="">
      <View className="px-6 py-4 flex-1 justify-center">

        <View className="flex flex-row items-center gap-2 mb-10">
          <Image className="h-10 w-10" source={require('../../assets/images/cartiftImage.png')} />
          <Text className="text-3xl mt-1">{contents('common.cartify')}</Text>
        </View>

        <View className="gap-4">
          <View className="gap-2">
            <Text className="font-bold text-2xl">{contents('login.log_in')}</Text>
            <Text className="text-muted-foreground dark:text-muted-foreground">{contents('login.enter_your_email_below_to_login_to_your_account')}</Text>

          </View>

          <View className="gap-2">
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="me@example.com"
                />
              )}
            />
            {errors.email && <Badge type="error" text={errors.email.message} />}
          </View>

          <View className="flex-row justify-between">
            <Text className="font-bold text-2xl">{contents('login.password')}</Text>
            <Text className="text-muted-foreground dark:text-muted-foreground"
              onPress={() => {
                navigation.navigate(Screen.FORGOT_PASSWORD);
              }}
            >{contents('login.forgot_your_password')}</Text>
          </View>


          <View className="gap-2">
            <Controller
              name="password"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {errors.password && <Badge type="error" text={errors.password.message} />}
            {!errors.password && loginError && <Badge type="error" text={loginError} />}
          </View>

          <Button
            title={contents('login.log_in')}
            onPress={handleSubmit(onSubmit)}
            isLoading={isLoading}

          />
        </View>
        <View className="mt-5 flex-row gap-2 justify-center">
          <Text className="text-muted-foreground dark:text-muted-foreground">{contents('login.dont_have_an_account')}</Text>
          <Text className="font-bold" onPress={() => {
            navigation.navigate(Screen.SIGNUP);
          }}>{contents('login.sign_up')}</Text>
        </View>


      </View>
    </BaseLayout>
  );
};

export default LoginScreen;

