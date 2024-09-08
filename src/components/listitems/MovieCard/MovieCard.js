import React from 'react';
import { Image, Text,  View } from 'react-native';
import styles from './styles';

const MovieCard = ({ movie }) => {
    return (
        <View style={styles.card}>
            <Image source={movie.image} style={styles.image} />
            <View style={styles.overlay}>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
        </View>
    );
}
export default MovieCard;
