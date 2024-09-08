import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const Searchbar = (props) => {
    return (
        <View style={styles.container}>
            <Icon name="search" size={15} color="black" style={styles.icon} />
            <TextInput style={styles.inputStyle} placeholder='TV shows movies and more' placeholderTextColor={"#6a6b6a"} onChangeText={props.onpress} onSubmitEditing={props.onend}></TextInput>
            <TouchableOpacity onPress={props.onclose}>
                <AntDesign name="close" size={18} color="black" style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
}

export default Searchbar;
