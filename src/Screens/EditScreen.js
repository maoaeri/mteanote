import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { IconButton, TextInput, FAB } from 'react-native-paper'
import Header from '../component/Header'

import { editnote } from '../reducer/noteApp'

function EditNote({ navigation }) {

    const dispatch = useDispatch()

    const mao = navigation.getParam('this_note')
    console.log(mao)
    const [Tit, setTit] = useState(mao.note.noteTitle)
    const [Des, setDes] = useState(mao.note.noteDescription)


    const editNote = obj => {
    console.log(obj.note)
    dispatch(editnote(obj))
    }

    function onEditedNote() {
        mao.note.noteTitle = Tit
        mao.note.noteDescription = Des
        editNote(mao)
        navigation.goBack()
    }

    return (
        <>
            <Header titleText='Edit the chosen note' />
            <IconButton
                icon="close"
                size={30}
                color='white'
                onPress={() => navigation.goBack()}
                style={styles.iconButton}
            />

            <View style={styles.container}>
                <TextInput
                    label="Note Title"
                    value={Tit}
                    onChangeText={setTit}
                    style={styles.title}
                />
                <TextInput
                    label="Note Description"
                    value={Des}
                    onChangeText={setDes}
                    multiline={true}
                    style={styles.text}
                    scrollEnabled={true}
                    returnKeyLabel='done'
                    blurOnSubmit={true}
                />
                <FAB
                    style={styles.fab}
                    icon="check"
                    disabled={Tit == '' ? true : false}
                    onPress={() => onEditedNote()}
                />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    iconButton: {
        backgroundColor: 'orange',
        position: 'absolute',
        right: 0,
        top: 40,
        margin: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 24,
        marginBottom: 16
    },
    text: {
        height: 300,
        fontSize: 16
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
        backgroundColor: 'cyan'
    }
})

export default EditNote