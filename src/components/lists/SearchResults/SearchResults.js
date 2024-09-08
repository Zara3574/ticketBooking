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
        {
            id: '4',
            title: 'Out of Time',
            category: 'Thriller',
            image: require('../../../assets/images/outoftme.jpg'),
        },
        {
            id: '5',
            title: 'Once Upon a Time in Hollywood',
            category: 'Drama',
            image: require('../../../assets/images/onceuponatimehollywood.jpg'),
        },
        {
            id: '6',
            title: 'About Time',
            category: 'Romance',
            image: require('../../../assets/images/abouttime.jpg'),
        },
        {
            id: '7',
            title: 'Time Traveler\'s Wife',
            category: 'Romantic Fantasy',
            image: require('../../../assets/images/timetravelerswife.jpg'),
        },
        {
            id: '8',
            title: 'Edge of Tomorrow',
            category: 'Action/Sci-Fi',
            image: require('../../../assets/images/edgeoftomorrow.jpg'),
        }
        
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
