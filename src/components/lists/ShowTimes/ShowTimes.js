import React from 'react';
import { StyleSheet, View ,FlatList, Text, Image} from 'react-native';
import styles from './styles';

const ShowTimes = () => {
    const showtimes = [
        { time: '12:30', hall: 'Cinetech + Hall 1', price: '50$', bonus: '2500 bonus', image: require('../../../assets/images/Img1.jpg') },
        { time: '13:30', hall: 'Cinetech + Hall 2', price: '75$', bonus: '3000 bonus', image: require('../../../assets/images/Img1.jpg') }
      ];
    return (
        
        <FlatList
        data={showtimes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.showtimeContainer}>
            <View style={styles.showtimeInfo}>
              <Text style={styles.showtimeText}>{item.time}</Text>
              <Text style={styles.hallText}>{item.hall}</Text>
            </View>
            <View style={styles.showtimeBox}>
              <Image source={require('../../../assets/images/seating.png')} style={styles.seatImage} />
            </View>
            <Text style={styles.priceText}>From {item.price} or {item.bonus}</Text>
          </View>
        )}
        contentContainerStyle={styles.showtimesSection} horizontal={true}
      />
    );
}


export default ShowTimes;
