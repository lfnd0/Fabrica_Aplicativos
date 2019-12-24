import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apelido: ""
    }

    this.clicar = this.clicar.bind(this);
  }
  
  clicar(apelido) {
    this.setState({
      apelido: apelido
    });
  }

  render() {

    let nome = "Joker";

    return (
      <View style={styles.container}>
        
        <Button title="Clique" onPress={() => this.clicar("Pudinzinho")}/>

        <Text>Olá mundo!</Text>
        <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>Aprendendo React Native!</Text>
        
        <Joker largura={100} altura={200} />
        <Text style={{ fontSize: 30 }}>{nome}</Text>
        <Text style={{ fontSize: 23, color: 'red', textAlign: 'center' }}>{this.state.apelido}</Text>
      </View >
    );
  }
}

export default App;

class Joker extends Component {
  render() {

    let img = "https://avatarfiles.alphacoders.com/209/209040.jpg"

    return (
      <View>
        <Image
          source={{ uri: img }}
          style={{ width: this.props.largura, height: this.props.altura }}
        />
        <Text>Arthur Fleck</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
