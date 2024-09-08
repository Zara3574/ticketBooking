import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import ResultItem from '../../listitems/SearchedResults/Resultitems';

const SearchResults = (props) => {
    const searchResults = [
        {
            id: '1',
            title: 'Timeless',
            category: 'Fantasy',
            image: require('../../../assets/images/timless.jpg'),
        },
        {
            id: '2',
            title: 'In Time',
            category: 'Sci-Fi',
            image: require('../../../assets/images/intime.jpg'),
        },
        {
            id: '3',
            title: 'A Time To Kill',
            category: 'Crime',
            image: require('../../../assets/images/atimetokill.jpg'),
        },
    ];

    const filteredResults = searchResults.filter(item =>
        item.title.toLowerCase().includes(props.text.toLowerCase())
    );
    const handleSendResults = () => {
        props.onSendResults(filteredResults);
    };
    useEffect(() => {
        handleSendResults()
    }, [props.text]);
    
    function handleGetTicketNav(item) {
        props.navigation.navigate("Getticket",{item})
      }
    return (
        <FlatList
            data={filteredResults} 
            renderItem={({ item }) => <ResultItem item={item} onpress={()=>handleGetTicketNav(item)}/>}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.resultsContainer}
        />
    );
}

export default SearchResults;
