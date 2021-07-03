import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';




export default function App() {
  const [number, setNumber] = useState(0)



  const Increase = () => {
    setNumber(number + 1)
  }

  const Decrease = () => {
    setNumber(number - 1)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn1} onPress={Increase}>
          <Text style={styles.bold}>Click me (+1)</Text>
      </TouchableOpacity>

      <Text style={styles.value}>{number}</Text>

      <TouchableOpacity style={styles.btn2} onPress={Decrease}>
          <Text style={styles.bold}>Click me (-1)</Text>
      </TouchableOpacity>
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
  btn1: {
    backgroundColor: '#3cf21f',
    padding: '15px',
    marginBottom : '25px',
    textDecorationStyle: 'bold',
  },
  btn2: {
    backgroundColor: '#ed0e0e',
    padding: '15px',
    marginTop : '25px',
    textDecorationStyle: 'bold',
  },
  bold: {
    fontWeight : '500'
  },
  value: {
    fontWeight: '500',
    fontSize : '50px'
  }
});
