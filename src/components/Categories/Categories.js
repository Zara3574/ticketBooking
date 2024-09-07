import React from 'react';
import { View, FlatList,TouchableOpacity,ImageBackground,Text } from 'react-native';
import styles from './styles';

const Categories = () => {
    const categories = [
        { title: 'Comedies', image: require('../../assets/images/com.jpg') },
        { title: 'Crime', image: require('../../assets/images/crime.jpg') },
        { title: 'Family', image: require('../../assets/images/fam.jpg') },
        { title: 'Documentaries', image: require('../../assets/images/doc.jpg') },
        { title: 'Dramas', image: require('../../assets/images/drama.jpg') },
        { title: 'Fantasy', image: require('../../assets/images/fantasy.jpg') },
        { title: 'Holidays', image: require('../../assets/images/holiday.jpg') },
        { title: 'Horror', image: require('../../assets/images/horror.jpg') },
    ];
    const CategoryItem = ({ item }) => (
        <TouchableOpacity style={styles.item}>
            <ImageBackground source={item.image} style={styles.image} imageStyle={{ borderRadius: 10 }}>
                <View style={styles.overlay}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={({ item }) => <CategoryItem item={item} />}
                keyExtractor={(item) => item.title}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                contentContainerStyle={styles.contentContainer}
            />
        </View>
    );
}


export default Categories;
