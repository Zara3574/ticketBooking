import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import ResultItem from '../../components/listitems/SearchedResults/Resultitems';

const FilteredResults = ({ navigation, route }) => {
    const { results } = route.params || [];

    function handleGetTicketNav(item) {
        navigation.navigate("Getticket", { item });
    }

    return (
        <View style={styles.container}>
            <View style={styles.headercontainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.fontStyle}>{results.length} Result Found</Text>
            </View>
            <View style={{backgroundColor:'#ededed'}}>
                <FlatList
                    data={results}
                    renderItem={({ item }) => (
                        <ResultItem
                            item={item}
                            onpress={() => handleGetTicketNav(item)} // Pass the onpress function here
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.resultsContainer}
                />
            </View>
        </View>
    );
};

export default FilteredResults;
