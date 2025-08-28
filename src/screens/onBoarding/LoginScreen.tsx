import * as React from 'react';
import { Text, View } from 'react-native';
import { BaseLayout } from '../../components/layout/BaseLayout';

const LoginScreen = () => {
  return (
    // <View  className="flex-1 items-center justify-center">
    //   <Text className="text-red-500">LoginScreen</Text>
    // </View>
    <BaseLayout isFullScreen={true} >
     <View  className="flex-1 items-center justify-center">
       <Text className="text-red-500">LoginScreen xyz</Text>
     </View>
    </BaseLayout>
  );
};

export default LoginScreen;
