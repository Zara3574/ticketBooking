import React from 'react';
import { StyleSheet, View,FlatList } from 'react-native';
import styles from './styles';
import MovieCard from '../MovieCard/MovieCard';

const Movies = () => {
    const movies = [
        {
            id: '1',
            title: 'Free Guy',
            image: require('../../assets/images/Img1.jpg'),
        },
        {
            id: '2',
            title: "The King's Man",
            image: require('../../assets/images/Img2.jpg'),
        },
        {
            id: '3',
            title: 'Jojo Rabbit',
            image: require('../../assets/images/Img3.jpg'),
        },
    ];

    return (
        <View style={styles.flatListContainer}>
            <FlatList
                data={movies}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MovieCard movie={item} />} style={{ margin: 20 }}
            />
        </View>
    );
}
export default Movies;
