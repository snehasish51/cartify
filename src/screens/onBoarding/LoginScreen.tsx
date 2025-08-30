import React, { } from 'react';
import { Image, View } from 'react-native';
import { BaseLayout } from '../../components/layout/BaseLayout';
import Text from '../../blueprints/Text';
import { contents } from '../../i18n/locales/contents';
import { Controller, useForm } from 'react-hook-form';
// import * as yup from 'yup';
import TextInput from '../../blueprints/TextInput';
import Badge from '../../blueprints/Badge';
import Button from '../../blueprints/Button';
import { useColors } from '../../utils/color';
// import { CloudDownload, FilterIcon } from 'lucide-react-native';
// import { yupResolver } from '@hookform/resolvers/yup';
const LoginScreen = () => {



  const { formState: { errors }, control, handleSubmit } = useForm({
    // resolver: yupResolver(schema),
    defaultValues: {
      email: '', //sandeep.sarkar1985@gmail.com',
      password: '', //'@12Qwaszx',
    },
  });


  return (
    <BaseLayout>
      <View className="px-6 py-4">

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
            <Badge type="error" text="asd" />
          </View>

          <View className="flex-row justify-between">
            <Text className="font-bold text-2xl">{contents('login.password')}</Text>
            <Text className="text-muted-foreground dark:text-muted-foreground">{contents('login.forgot_your_password')}</Text>
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
            <Badge type="error" text="asd" />
          </View>

          <Button
            title={contents('login.log_in')}

          />
        </View>
        <View className="mt-5 flex-row gap-2 justify-center">
          <Text className="text-muted-foreground dark:text-muted-foreground">{contents('login.dont_have_an_account')}</Text>
          <Text className="font-bold">{contents('login.sign_up')}</Text>
        </View>


      </View>
    </BaseLayout>
  );
};

export default LoginScreen;
