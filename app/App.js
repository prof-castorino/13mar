import React from 'react';
import {Calculadora} from './screens/Calculadora'
import { StyleSheet, View, } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Calculadora de IMC</Text> 
      <Calculadora/>        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
