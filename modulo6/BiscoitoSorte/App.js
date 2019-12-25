import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      frase: '',
      img: require('./img/biscoito.png')
    };

    this.abrirBiscoito = this.abrirBiscoito.bind(this);

    this.frases = [
      'O mundo não está em seus livros e mapas. Ele está lá fora!',
      'Não duvido mais do que já suponho.',
      'Para olhos tortos, a realidade pode ter um rosto desvirtuado.',
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];
  }

  abrirBiscoito() {
    let sorteio = Math.floor(Math.random() * this.frases.length);
    
    this.setState({
      frase: `"${this.frases[sorteio]}"`,
      img: require('./img/biscoitoAberto.png')
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <Image source={this.state.img} style={styles.img} />
        <Text style={styles.frase}>{this.state.frase}</Text>

        <TouchableOpacity style={styles.btn} onPress={this.abrirBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Abrir biscoito</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  img: {
    width: 250,
    height: 250
  },

  frase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },

  btn: {
    width: 220,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },

  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnTexto: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#dd7b22'
  }
});

export default App;