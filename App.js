import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import  Dashboard  from "./components/dashboard";
import Start from './components/start';

export default function App() {
  return (
    <View style={styles.coverSafeArea}>
    <SafeAreaView style={styles.safeView}>
      <StatusBar style="auto" />
    <View style={styles.container}>
      {/* <Dashboard /> */}
      <Start />
    </View>
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  coverSafeArea:{
    flex:1,
    backgroundColor:'#fff'
  },
  safeView:{
    flex:1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
