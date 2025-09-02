import React, { useState } from 'react';
import { View } from 'react-native';
import Text from '../../blueprints/Text';
import { BaseLayout } from '../../components/layout/BaseLayout';
import { MailOpen } from 'lucide-react-native';
import { useColors } from '../../utils/color';
import { contents } from '../../i18n/locales/contents';
import { Card, CardContent } from '../../components/card/Card';
import Button from '../../blueprints/Button';
import auth from '@react-native-firebase/auth';
import Badge from '../../blueprints/Badge';

const ResendEmailVerification = ({ route }: any) => {
  const colors = useColors();
  const { user } = route.params;
  const [isLoading, setIsloading] = useState(false);
  const [varificationMessage, setVarificationMessage] = useState('');


  const sendVerficationCode = async () => {
    if (varificationMessage !== '') { setVarificationMessage(''); }
    try {
      setIsloading(true);
      await user.sendEmailVerification();

      console.log('success',);
      setIsloading(false);
      setVarificationMessage(contents('resend_emai_verification.verification_email_has_been_resent'));
    }
    catch (error: any) {
      console.log('error', error);
      setIsloading(false);
      setVarificationMessage(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await auth().signOut();
    } catch (error: any) {
    }
  };


  return (
    <BaseLayout>
      <View className="flex-1 px-6 mt-20">
        <View className="items-center mt-20 gap-6">
          <MailOpen color={colors.primary} size={64} />
          <Text className="text-2xl font-bold">{contents('resend_emai_verification.email_verification_required')}</Text>
          <Card>
            <CardContent>
              <View className="items-center gap-2">
                <Text className="text-base font-bold">{contents('resend_emai_verification.pleaase_verify_your_email_address')}</Text>
                <Text className="text-sm text-muted-foreground dark::text-muted-foreground text-center">{contents('resend_emai_verification.weve_sent_a_verification_email_to_your_email_address')}</Text>
                <View className="flex-row gap-2">
                  <Text className="text-sm text-muted-foreground dark::text-muted-foreground text-center">{contents('resend_emai_verification.please_check_your_email')}</Text>
                  <Text className="text-sm text-center font-bold">{user?.email}</Text>
                </View>
              </View>
            </CardContent>
          </Card>
          {varificationMessage !== '' && (
            <Badge
              type="primary"
              text={varificationMessage}
            />
          )}

          <View className="gap-4 w-full">
            <Button title={contents('resend_emai_verification.resend_verification_email')}
              isLoading={isLoading}
              onPress={() => {
                sendVerficationCode();

              }}
            />
            <Button title={contents('resend_emai_verification.logout')}
              onPress={() => {
                handleLogout();
              }}
            />

          </View>
        </View>
      </View>
    </BaseLayout>
  );
};

export default ResendEmailVerification;
