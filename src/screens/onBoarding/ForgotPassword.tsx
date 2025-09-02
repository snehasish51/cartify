import React from 'react';
import { View } from 'react-native';
import Text from '../../blueprints/Text';
import { BaseLayout } from '../../components/layout/BaseLayout';
import { Lock, Home, LockKeyhole } from 'lucide-react-native';
import { useColors } from '../../utils/color';
import { contents } from '../../i18n/locales/contents';
import { Controller, useForm } from 'react-hook-form';
import TextInput from '../../blueprints/TextInput';
import Badge from '../../blueprints/Badge';
import Button from '../../blueprints/Button';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
    const colors = useColors();
    const navigation=useNavigation();
    const { formState: { errors }, control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
        },
    });
    return (
        <BaseLayout>
            <View className="flex-1  px-6 mt-20">

                <View className="items-center mt-20">
                    <LockKeyhole color={colors.primary} size={64} />
                </View>

                <View className="gap-4 mt-10">
                    <View className="gap-2">
                        <Text className="font-bold text-2xl">{contents('forgotPassword.forgot_password')}</Text>
                        <Text className="text-muted-foreground dark:text-muted-foreground">{contents('forgotPassword.enter_your_email_below_to_reset_your_password')}</Text>
                    </View>
                    <View className="gap-2">
                        <Controller
                            name="email"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    value={value}
                                    onChangeText={onChange}
                                    placeholder={contents('forgotPassword.email_placeholder')}
                                />

                            )}

                        />
                        <Badge type="error" text="asd" />
                    </View>
                    <Button
                        title={contents('forgotPassword.reset_password')}
                    />
                    <Button
                        title={contents('forgotPassword.go_back')}
                        className="bg-transparent dark:bg-transparent border border-zinc-400 dark:border-zinc-600"
                        textClassName="text-black dark:text-white"
                        onPress={()=>navigation.goBack()}
                    />

                </View>
            </View>
        </BaseLayout>
    );
};

export default ForgotPassword;
