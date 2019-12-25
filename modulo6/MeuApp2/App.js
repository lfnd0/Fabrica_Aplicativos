import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.area}>
        <Text style={[styles.destacarTexto, styles.alinharTexto]}>Texto 1</Text>
        <Text style={styles.negrito}>Texto 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  area: {
    marginTop: 40
  },
  destacarTexto: {
    fontSize: 25,
    color: '#ff0000'
  },
  alinharTexto: {
    textAlign: 'center'
  },
  negrito: {
    fontWeight: 'bold'
  }
});

export default App;