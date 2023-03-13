import React, {useState} from 'react';
import {InputNumber} from './components/TextInput/Number'
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  const [altura, SetAltura] = useState('')
  const [erroAltura, SetErroAltura] = useState('')
  const [peso, SetPeso] = useState('')
  const [erroPeso, SetErroPeso] = useState('')
  const [result, SetResult] = useState('') 
  
  const hasAltura = (a)=>{
    SetAltura(a)
    SetErroAltura((isNaN(a)|| a>=3)?'Digite apenas números validos':'')
  }
  
  const hasPeso = (a)=>{
    SetPeso(a)
    SetErroPeso(isNaN(a)?'Digite apenas números validos':'')
  }

  const decorator = (imc) =>{
    if(imc < 16){ return 'Muito abaixo do peso'}
    if (imc < 17){ return 'Moderadamente abaixo do peso'}
    if (imc < 18.5){return 'Abaixo do peso'}
    if (imc < 25) {return 'Saudavel'}
    if (imc < 30) {return 'Sobrepeso'}
    if (imc < 35) {return 'Obesidade Grau 1°'}
    if (imc < 40) {return 'Obesidade Grau 2°'}
    return 'Obesidade Grau 3°'  
  }

  const calc = ()=>{
    var imc = peso / (altura * altura)
    SetResult(isNaN(imc)? 'Digite apenas números validos': decorator(imc))
  }

  return (
    <View style={styles.container}>
      <Text>Calculadora de IMC</Text> 
      <InputNumber 
        erro={erroPeso} 
        item={peso} 
        hasItem={hasPeso} 
        placeholder='Digite seu peso' 
        maxLength='3'
      />
      <InputNumber 
        erro={erroAltura} 
        item={altura} 
        hasItem={hasAltura} 
        placeholder='Digite sua altura' 
        maxLength='4' 
      />

      <Button 
      onPress={()=>{ calc() }}
      title='Calcular'
      />
      <Text>{result}</Text>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt:{
    width: '100%',
    height:40,
    borderWidth:1,
    borderColor:'gray'
  },
  error:{
    width: '100%',
    height:40,
    borderWidth:1,
    borderColor:'red'
  },
  txtError:{
    color:'red'
  }
});
