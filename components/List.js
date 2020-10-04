import React from 'react';
import { FlatList, Text, View, Button, StyleSheet, Dimensions } from 'react-native';

export default ({ puntos }) => {
  return (
    <>
      <View style={ styles.list }>
        <FlatList
          data={ puntos.map(x => x.name) }
          renderItem={({ item }) => <Text>{ item }</Text>}
          keyExtractor={item => item}
          />
      </View>
      <View>
        <Button title='Cerrar'/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  list:{
    height: Dimensions.get('window').height - 250,
  }
})
