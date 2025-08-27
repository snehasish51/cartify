import React, { } from 'react';
// import { Text, View } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import '@react-native-firebase/app';
import MainApp from './src/MainApp';

export default function App() {
  // useEffect(() => {
  //   auth()
  //     .signInWithEmailAndPassword("snehasishg029@gmail.com", "@12Qwaszx")
  //     .then(() => {
  //       console.log("✅ Login successfully");
  //     })
  //     .catch((e) => {
  //       console.error("❌ Login failed:", e);
  //     });
  // }, []);

  return (
    <MainApp />
  );
}
