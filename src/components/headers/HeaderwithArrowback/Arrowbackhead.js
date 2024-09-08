import React from 'react';
import { StyleSheet, TouchableOpacity, View ,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
const Arrowbackhead = (props) => {
    return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <View style={{  flex:1,alignItems: 'center' }}>
                    <Text style={styles.movieTitle}>{props.title}</Text>
                    <Text style={styles.subTitle}>March 5, 2021 | 12:30 Hall 1</Text>
                </View>
            </View>
    );
}


export default Arrowbackhead;
