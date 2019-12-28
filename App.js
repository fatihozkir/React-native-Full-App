import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

export default function App() {
  return (
   <View style={styles.container}>
       <Text>OK</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center'
    }
});