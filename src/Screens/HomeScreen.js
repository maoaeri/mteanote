import React, {useState} from 'react';
import {
  KeyboardAvoidingView, StyleSheet, Text, View,
  TextInput, TouchableOpacity, Keyboard,
  ScrollView, Alert, FlatList, Dimensions,
} from 'react-native';
import { List } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { addnote, deletenote } from '../reducer/noteApp';
import Header from '../component/Header';

const HomeScreen = ({navigation}) => {

  const notes = useSelector(state => state)

  const dispatch = useDispatch()

  const addNote = note => {
    console.log(note)
    dispatch(addnote(note))
  }
  const deleteNote = id => dispatch(deletenote(id))

  const showAlert = (index) =>
    Alert.alert(
      index.note.noteTitle,
      index.note.noteDescription,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Delete", onPress: () => deleteNote(index.id) }
      ]
    );

  return (
    <>
    <Header titleText='Tasks Today' />
    <View style={styles.container}>

      {notes.length === 0 ? (
        <Text style={styles.donthave}>You do not have any Notes!</Text>
      ) : (
        <FlatList
        data={notes}
        renderItem={({ item }) => (
          <List.Item
          title={item.note.noteTitle}
          description={item.note.noteDescription}
          descriptionNumberOfLines={1}
          titleStyle={styles.listTitle}
          descriptionStyle={styles.listDes}
          style={styles.listView}
          onPress = {()=> showAlert(item)}
          />
          )}
        keyExtractor={item => item.id.toString()}
        />
          
        )
      }

        <TouchableOpacity onPress={() => navigation.navigate('AddScreen', {addNote})}>
          <View style={styles.addbutton}>
            <Text style={{color: 'black', fontSize: 20}}>+ Add a note here!</Text>
          </View>
        </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        opacity: 0.9,
        paddingTop: 80,
        paddingBottom: 125,
        paddingHorizontal: 20
      },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
      },
    items: {
        marginTop: 30,
      },
    donthave: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      fontSize: 18,
      color: 'white'
    },
    listTitle: {
      fontSize: 20,
      color: 'white'
    }, 
    listDes: {
      color: 'grey'
    },
    listView: {
      backgroundColor: 'rgba(52,52,52,0.6)',
      padding: 15,
      borderRadius: 30,
      marginTop: 10
    },
    addbutton: {
      position: 'absolute',
      margin: 20,
      right: 0,
      bottom: -75,
      paddingHorizontal: 15,
      alignItems: 'center',
      backgroundColor: 'cyan',
      justifyContent: 'center',
      borderRadius: 20,
      width: 225,
      height: 40
    }
});

export default HomeScreen;
