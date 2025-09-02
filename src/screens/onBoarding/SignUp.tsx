import React, { } from 'react';
import { ScrollView, View } from 'react-native';
import { BaseLayout } from '../../components/layout/BaseLayout';
import Text from '../../blueprints/Text';
import { contents } from '../../i18n/locales/contents';
import { Controller, useForm } from 'react-hook-form';
import TextInput from '../../blueprints/TextInput';
import Badge from '../../blueprints/Badge';
import Button from '../../blueprints/Button';
import { useNavigation } from '@react-navigation/native';



const SignUp = () => {
    const navigation = useNavigation();
    const { control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    })

    return (
        <BaseLayout>

            <View className="flex-1 px-6">
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
                                        onChange={onChange}
                                        placeholder={contents('signup.first_name')}
                                    />
                                )}
                            />
                            <Badge text="asd" type="error" className="mt-1" />
                        </View>
                        <View className="gap-2">
                            <Text className="text-base font-bold">{contents('signup.last_name')}</Text>
                            <Controller
                                name="lastName"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        value={value}
                                        onChange={onChange}
                                        placeholder={contents('signup.last_name')}
                                    />
                                )}
                            />
                            <Badge text="asd" type="error" className="mt-1" />
                        </View>

                        <View className="gap-2">
                            <Text className="text-base font-bold">{contents('signup.email')}</Text>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        value={value}
                                        onChange={onChange}
                                        placeholder={contents('signup.email_placeholder')}
                                    />
                                )}
                            />
                            <Badge text="asd" type="error" className="mt-1" />
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
                                        onChange={onChange}
                                    />
                                )}
                            />
                            <Badge text="asd" type="error" className="mt-1" />
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
                                        onChange={onChange}
                                    />
                                )}
                            />
                            <Badge text="asd" type="error" className="mt-1" />
                        </View>
                        <View className="mt-5">
                            <Button
                                title={contents('signup.register')}
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
