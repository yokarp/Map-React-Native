import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { Map, Modal, Panel, Input } from './components'

export default function App() {
  const [puntos, setPuntos] = useState([])
  const [nombre, setNombre] = useState('')
  const [puntoTemp, setPuntoTemp] = useState({})
  const [visibility, setVisibility] = useState(false)
  const [visibilityFilter, setVisibilityFilter] = useState("new_punto")

  const handleLongPress= ({ nativeEvent }) =>{
    setVisibilityFilter('new_punto')
    setPuntoTemp( nativeEvent.coordinate )
    setVisibility(true)
  }

  //Funcion de enviar valor
  const handleChangeText = text =>{
    setNombre(text)
  }

  //Función del botón
  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre };
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre('')
  }

  const handleLista = () => {
    setVisibilityFilter('all_puntos')
    setVisibility(true)
  }

  return (
    <View style={styles.container} >
      <Map onLongPress={handleLongPress} />
      <Panel onPressLeft={handleLista} textLeft='Lista'/>
      <Modal visibility={visibility}>
        {visibilityFilter === 'new_punto'
          ?
          <>
          <Input title="Nombre" placeholder="Nombre del punto" onChangeText={handleChangeText}/>
          <Button title="Aceptar" onPress={handleSubmit}/>
          </>
          : <Text>Lalala</Text>
        }
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
