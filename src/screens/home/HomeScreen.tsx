
import * as React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';


const HomeScreen = () => {
  const user = auth().currentUser;
  const handleLogout = async () => {
    try {
      await auth().signOut();
      Alert.alert('Success', 'Logged out successfully!');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };


  const getUser = async () => {
    try {
      // const user = auth().currentUser;
      const idToken = await user?.getIdToken();

      console.log('idToken', idToken);
      const response = await fetch('https://cartify-backend-3zsu.onrender.com/users/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });

      const data = await response.json();
      console.log('Full user profile:', data);

    }

    catch (error) {
      console.log('error', error);

    }
  };

    console.log('user', user);
    return (
      <View className="flex-1 justify-center items-center bg-white dark:bg-black p-4 gap-4">
        <Text className="text-2xl font-bold text-black dark:text-white mb-4">
          HomeScreen
        </Text>
        <Button title="Logout" onPress={handleLogout} />
        <Button title="user" onPress={getUser}/>
      </View>
    );
  };
  export default HomeScreen;
