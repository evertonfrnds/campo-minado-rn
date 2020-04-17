import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import params from './src/params';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tamanho da grade : 
        {params.getRowsAmount()}x{params.getColumsAmount()}
      </Text>
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
});
