import React from 'react';
import { StyleSheet, View,TouchableOpacity,Text,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

const ResultItem = ({ item,onpress }) => (
    <TouchableOpacity style={styles.resultItem} onPress={onpress}>
        <Image source={item.image} style={styles.resultImage} />
        <View style={styles.resultInfo}>
            <Text style={styles.resultTitle}>{item.title}</Text>
            <Text style={styles.resultCategory}>{item.category}</Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
            <Icon name="dots-three-horizontal" size={20} color="#000" />
        </TouchableOpacity>
    </TouchableOpacity>
);
export default ResultItem;
