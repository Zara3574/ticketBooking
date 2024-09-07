import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


const FilteredResults = ({ navigation, route }) => {
    const { results } = route.params || [];
    function handleGetTicketNav(item) {
        navigation.navigate("Getticket", { item })
    }
    const ResultItem = ({ item }) => (
        <TouchableOpacity style={styles.resultItem} onPress={() => handleGetTicketNav(item)}>
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
        <View style={styles.container}>
            <View style={styles.headercontainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.fontStyle}>{results.length} Result Found</Text>
            </View>
            <View style={{backgroundColor:'#ededed'}}>
                <FlatList
                    data={results} // Use the filtered results here
                    renderItem={({ item }) => <ResultItem item={item} />}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.resultsContainer}
                />
            </View>
        </View>
    );
};

export default FilteredResults;
