import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch' }}>

      <View style={{ width: 100, height: 50, backgroundColor: 'green' }}></View>
      <View style={{ height: 50, backgroundColor: 'blue' }}></View>
      <View style={{ height: 50, backgroundColor: 'red' }}></View>
      
    </View>
  );
}