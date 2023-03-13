import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export const InputNumber = props => {
    return (
        <View>
            <TextInput
                style={props.erro ? styles.error : styles.txt}
                keyboardType='numeric'
                placeholder={props.placeholder}
                maxLength={parseInt(props.maxLength)}
                onChangeText={item => props.hasItem(item.replace(',', '.'))}
                defaultValue={props.item}
            />
            <Text style={styles.txtError}>{props.erro}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray'
    },
    error: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'red'
    },
    txtError: {
        color: 'red'
    }
});
