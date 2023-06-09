import React from 'react';
import { Modal,StyleSheet, Text, View,Pressable} from 'react-native';
export const ModalCustom = props=>{
    return (<Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.modalText}>{props.title}</Text>
            <Text style={styles.modalText}>{props.descrition}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={()=>{props.modalCallback(false)}}>
              <Text style={styles.textStyle}>{props.button}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>)
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    }
})