
import * as React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const handleLogout = async () => {
    try {
      await auth().signOut();
      Alert.alert('Success', 'Logged out successfully!');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white dark:bg-black p-4">
      <Text className="text-2xl font-bold text-black dark:text-white mb-4">
        HomeScreen
      </Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
