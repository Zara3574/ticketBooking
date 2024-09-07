import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';

const SearchResults = (props) => {
    const searchResults = [
        {
            id: '1',
            title: 'Timeless',
            category: 'Fantasy',
            image: require('../../assets/images/timless.jpg'),
        },
        {
            id: '2',
            title: 'In Time',
            category: 'Sci-Fi',
            image: require('../../assets/images/intime.jpg'),
        },
        {
            id: '3',
            title: 'A Time To Kill',
            category: 'Crime',
            image: require('../../assets/images/atimetokill.jpg'),
        },
    ];

    const filteredResults = searchResults.filter(item =>
        item.title.toLowerCase().includes(props.text.toLowerCase())
    );
    const handleSendResults = () => {
        props.onSendResults(filteredResults);
    };
    useEffect(() => {
        // Call the callback function with filtered results when the component mounts or when `props.text` changes
        handleSendResults()
    }, [props.text]);
    const ResultItem = ({ item }) => (
        <TouchableOpacity style={styles.resultItem} onPress={props.onpress}>
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

    return (
        <FlatList
            data={filteredResults} // Use the filtered results here
            renderItem={({ item }) => <ResultItem item={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.resultsContainer}
        />
    );
}

export default SearchResults;
