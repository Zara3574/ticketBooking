import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Header = (props) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Watch</Text>
            <TouchableOpacity onPress={props.onpress}>
                <Icon name="search" size={20} color="black" style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
}

export default Header;
