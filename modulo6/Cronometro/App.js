import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      relogio: 0,
      botao: 'INICIAR',
      resultado: null
    };

    this.timer = null;

    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  iniciar() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ botao: 'CONTINUAR' })
    } else {
      this.timer = setInterval(() => {
        this.setState({ relogio: this.state.relogio + 0.1 })
      }, 100);
      this.setState({ botao: 'PAUSAR' });
    }
  }

  limpar() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      resultado: this.state.relogio,
      relogio: 0,
      botao: 'INICIAR',
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <Image source={require('./img/cronometro.png')}
          style={styles.img} />

        <Text style={styles.timer}>{this.state.relogio.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.iniciar}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaResultado}>
          <Text style={styles.textoResultado}>
            {this.state.resultado > 0 ? `Tempo: ${this.state.resultado.toFixed(1)}s` : ''}
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 60,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaResultado: {
    marginTop: 40,
  },
  textoResultado: {
    fontSize: 25,
    color: '#FFF'
  }
});

export default App;