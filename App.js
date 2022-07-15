/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {peso: '', altura: '', info: '', resultado: '0.0'}
    this.calculaIMC = this.calculaIMC.bind(this)
  }
  calculaIMC(){
    let imc = this.state.peso / (this.state.altura * this.state.altura)
    let s = this.state
    s.resultado = imc
    if(s.resultado < 18.5){
      s.info ='DELGADO'
    }
    else if (s.resultado < 24.9){
     s.info ='NORMAL'
    }
    else if (s.resultado < 29.9){
     s.info ='SOBREPESO'
    }
    else if (s.resultado < 39.9) {
     s.info ='OBESIDAD'
    }
    else if (s.resultado > 39.9) {
     s.info ='OBESIDAD GRAVE'
    }
    this.setState(s)
  }

  clear = () => {
    this.setState({
      peso: '',
      altura: '',
      resultado: '0.0',
      info: ''
    })
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.text}> Altura (m)</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={altura => this.setState({ altura })}
          value={this.state.altura}
          placeholder='Ejemplo: 1.60'
          keyboardType={'numeric'}
        />
        <Text style={styles.text}> Peso (kg)</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={peso => this.setState({ peso })}
          value={this.state.peso}
          placeholder='Ejemplo: 61.0'
          keyboardType={'numeric'}
        />
        <Separator />
        <Button
          onPress={this.calculaIMC}
          title='Calcular'
          color='green'
          accessibilityLabel='Calcular IMC'
        />
        <Separator />
        <Button
          onPress={this.clear}
          title='Limpiar'
          color='red'
          accessibilityLabel='limpiar los valores'
        />
        <Separator />
        <Text style={styles.input}>
         IMC: {this.state.resultado}
        </Text>
        <Text style={styles.input}>
         Estado: {this.state.info}
        </Text>
      </View>
    );
  }
}
const Separator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    fontSize: 30,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 20,
    margin: 10,
    borderRadius: 20
  }
});