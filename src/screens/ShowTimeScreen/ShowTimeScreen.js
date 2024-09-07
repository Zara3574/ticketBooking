import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ShowTimesScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('5 Mar');
  
  // Sample dates and showtimes data
  const dates = ['5 Mar', '6 Mar', '7 Mar', '8 Mar', '9 Mar'];
  const showtimes = [
    { time: '12:30', hall: 'Cinetech + Hall 1', price: '50$', bonus: '2500 bonus', image: 'path_to_image' },
    { time: '13:30', hall: 'Cinetech + Hall 2', price: '75$', bonus: '3000 bonus', image: 'path_to_image' }
  ];

  return (
    <View style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.movieTitle}>The King's Man</Text>
        <Text style={styles.subTitle}>In Theaters December 22, 2021</Text>
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
      <ScrollView style={styles.showtimesSection}>
        {showtimes.map((show, index) => (
          <View key={index} style={styles.showtimeContainer}>
            <View style={styles.showtimeBox}>
              <Image source={{uri: show.image}} style={styles.seatImage} />
              <View style={styles.showtimeInfo}>
                <Text style={styles.showtimeText}>{show.time}</Text>
                <Text style={styles.hallText}>{show.hall}</Text>
                <Text style={styles.priceText}>From {show.price} or {show.bonus}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Select Seats Button */}
      <TouchableOpacity style={styles.selectButton}>
        <Text style={styles.selectButtonText}>Select Seats</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShowTimesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    color: '#888',
  },
  dateSection: {
    marginBottom: 16,
  },
  dateLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  dateButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  selectedDate: {
    backgroundColor: '#00aaff',
  },
  dateText: {
    fontSize: 16,
  },
  showtimesSection: {
    flex: 1,
    marginBottom: 16,
  },
  showtimeContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  showtimeBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  seatImage: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  showtimeInfo: {
    flex: 1,
  },
  showtimeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  hallText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  priceText: {
    fontSize: 14,
    color: '#333',
  },
  selectButton: {
    backgroundColor: '#00aaff',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  selectButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
