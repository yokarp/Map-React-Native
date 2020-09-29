import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Map, Modal, Panel, Input } from './components'

export default function App() {
  const [puntos, setPuntos] = useState([])
  const [nombre, setNombre] = useState('')
  const [puntoTemp, setPuntoTemp] = useState({})
  const [visibility, setVisibility] = useState(false)

  const handleLongPress= ({ nativeEvent }) =>{
    setPuntoTemp( nativeEvent.coordinate )
    setVisibility(true)
  }

  //Funcion de enviar valor
  const handleChangeText = text =>{
    setNombre(text)
  }

  return (
    <View style={styles.container} >
      <Map onLongPress={handleLongPress} />
      <Panel />
      <Modal visibility={visibility}>
        <Input title="Nombre" placeholder="Nombre del punto" onChangeText={handleChangeText}/>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
