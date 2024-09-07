import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const ShowTimesScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('5 Mar');

  // Sample dates and showtimes data
  const dates = ['5 Mar', '6 Mar', '7 Mar', '8 Mar', '9 Mar'];
  const showtimes = [
    { time: '12:30', hall: 'Cinetech + Hall 1', price: '50$', bonus: '2500 bonus', image: require('../../assets/images/Img1.jpg') },
    { time: '13:30', hall: 'Cinetech + Hall 2', price: '75$', bonus: '3000 bonus', image: require('../../assets/images/Img1.jpg') }
  ];
function handleSeatSelectionNav()
{
  navigation.navigate("SeatSelection")
}
  return (
    <View style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center', }}>
          <Text style={styles.movieTitle}>The King's Man</Text>
          <Text style={styles.subTitle}>In Theaters December 22, 2021</Text>
        </View>

      </View>

      {/* Date Selector */}
      <View style={styles.dateSection}>
        <Text style={styles.dateLabel}>Date</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dates.map((date, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.dateButton, selectedDate === date && styles.selectedDate]}
              onPress={() => setSelectedDate(date)}
            >
              <Text style={styles.dateText}>{date}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Showtimes */}
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
            <Image source={require('../../assets/images/seating.png')} style={styles.seatImage} />
          </View>
          <Text style={styles.priceText}>From {item.price} or {item.bonus}</Text>
        </View>
      )}
      contentContainerStyle={styles.showtimesSection} horizontal={true} 
    />
      <TouchableOpacity style={styles.selectButton} onPress={()=>handleSeatSelectionNav()}>
        <Text style={styles.selectButtonText}>Select Seats</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShowTimesScreen;

