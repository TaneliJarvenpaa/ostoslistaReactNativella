import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [ruoka, setRuoka] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    setRuoka([]);
  }, []);

  const handleRuokaChange =(text) =>{
    setRuoka(text);
  };

  handleAddingToList =(operation) =>{
    if (operation === 'add'){
      setLista([...lista,{key:`${ruoka}`}]);
      setRuoka('');}
    else if (operation ==='clear'){
      setLista([]);
    }
      
  };
  return (
    <View style={styles.container}>

      <View>
      <TextInput 
      style={styles.input} 
      onChangeText={(text) => handleRuokaChange(text)}
      value={ruoka}
      />
      <StatusBar style="auto" />
      </View>

      <View style={styles.buttonContainer}>
      <Button title='Add' onPress={()=>handleAddingToList('add')}/>
      <Button title='Clear' onPress={()=>handleAddingToList('clear')}/>
      </View>
        <Text style={styles.header}>Shopping List</Text>
      <View style={styles.listContainer}>
        
        <FlatList  data={lista} 
        renderItem={({item}) => <Text>{item.key}</Text>}
        keyExtractor={(item,index)=> index.toString()}
        />
      </View>
      
      
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
  input: {
    borderColor: 'black',
    width: 200,
    fontSize:14,
    borderWidth: 1,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom:50,
  },
  listContainer:{
    
      borderColor: 'black',
      width: 200,
      height: 250,
      borderWidth: 1,
      marginBottom: 10,
      marginTop: 20,
    
  },
  header:{
    fontSize :26 , 
    fontWeight:'200',
    marginTop:-8
  }
});
