import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { BaseLayout } from '../../components/layout/BaseLayout';
import Text from '../../blueprints/Text';
import { contents } from '../../i18n/locales/contents';
import { Controller, useForm } from 'react-hook-form';
import TextInput from '../../blueprints/TextInput';
import Badge from '../../blueprints/Badge';
import Button from '../../blueprints/Button';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createUser, createUserType } from '../../api/users/usersApi';
import { AppNavigationProp, Screen } from '../../navigation/appNavigation.type';


const schema = yup.object().shape({
    firstName: yup.string().required(contents('error.this_field_can_not_be_empty')),
    lastName: yup.string().required(contents('error.this_field_can_not_be_empty')),
    email: yup.string().required(contents('error.this_field_can_not_be_empty')).email(contents('error.invalid_email')),
    password: yup.string().required(contents('error.this_field_can_not_be_empty')).min(8, contents('error.password_instruction')).matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        contents('error.password_instruction'),
    ),
    confirmPassword: yup.string().required(contents('error.this_field_can_not_be_empty')).oneOf([yup.ref('password')], contents('error.password_must_match')),
});
const SignUp = () => {
    const navigation = useNavigation<AppNavigationProp>();
    const [isLoading, setIsloading] = useState(false);
    const { control, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = async (formData: createUserType) => {
        setIsloading(true);

        const data = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
        };

        try {
            const response = await createUser(data);
            console.log('API response:', response);
            if (response.uid) {
                navigation.navigate(Screen.LOGIN);
            }
        } catch (error) {
            console.error('Signup failed:', error);
        } finally {
            setIsloading(false);
        }
    };

    return (
        <BaseLayout>
            <View className="flex-1 px-6 mt-20">
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className="gap-2">
                        <View className="gap-2">
                            <Text className="font-bold text-2xl">{contents('signup.register')}</Text>
                            <Text className="text-muted-foreground dark:text-muted-foreground">{contents('signup.enter_your_information_to_create_your_account')}</Text>
                        </View>

                        <View className="gap-2">
                            <Text className="text-base font-bold">{contents('signup.first_name')}</Text>
                            <Controller
                                name="firstName"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        value={value}
                                        onChangeText={onChange}
                                        placeholder={contents('signup.first_name')}
                                    />
                                )}
                            />
                            {errors.firstName && <Badge text={errors.firstName.message} type="error" />}
                        </View>
                        <View className="gap-2">
                            <Text className="text-base font-bold">{contents('signup.last_name')}</Text>
                            <Controller
                                name="lastName"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        value={value}
                                        onChangeText={onChange}
                                        placeholder={contents('signup.last_name')}
                                    />
                                )}
                            />
                            {errors.lastName && <Badge text={errors.lastName.message} type="error" />}
                        </View>

                        <View className="gap-2">
                            <Text className="text-base font-bold">{contents('signup.email')}</Text>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        value={value}
                                        onChangeText={onChange}
                                        placeholder={contents('signup.email_placeholder')}
                                    />
                                )}
                            />
                            {errors.email && <Badge text={errors.email.message} type="error" />}
                        </View>

                        <View className="gap-2">
                            <Text className="text-base font-bold">{contents('signup.password')}</Text>
                            <Controller
                                name="password"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        secureTextEntry
                                        value={value}
                                        onChangeText={onChange}
                                    />
                                )}
                            />
                            {errors.password && <Badge text={errors.password.message} type="error" />}
                        </View>

                        <View className="gap-2">
                            <Text className="text-base font-bold">{contents('signup.confirm_password')}</Text>
                            <Controller
                                name="confirmPassword"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        value={value}
                                        secureTextEntry
                                        onChangeText={onChange}
                                    />
                                )}
                            />
                            {errors.confirmPassword && <Badge text={errors.confirmPassword.message} type="error" />}
                        </View>
                        <View className="mt-5">
                            <Button
                                title={contents('signup.register')}
                                onPress={handleSubmit(onSubmit)}
                                isLoading={isLoading}
                            />
                            <View className="mt-5 flex-row gap-2 justify-center">
                                <Text className="text-muted-foreground dark:text-muted-foreground">{contents('signup.already_have_an_account')}</Text>
                                <Text className="font-bold" onPress={() => {
                                    navigation.goBack();
                                }}>{contents('signup.log_in')}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </BaseLayout>
    );
};

export default SignUp;
