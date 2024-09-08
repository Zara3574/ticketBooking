import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import Arrowbackhead from '../../components/headers/HeaderwithArrowback/Arrowbackhead';
import ShowTimes from '../../components/lists/ShowTimes/ShowTimes';

const ShowTimesScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const [selectedDate, setSelectedDate] = useState('5 Mar');

  const dates = ['5 Mar', '6 Mar', '7 Mar', '8 Mar', '9 Mar'];

  function handleSeatSelectionNav() {
    navigation.navigate("SeatSelection", { item });
  }

  return (
    <View style={styles.container}> 
      <Arrowbackhead navigation={navigation} title={item.title} />
      <View style={{ flex: 1 }}> 
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
        <ShowTimes />
      </View>

      {/* Button at the bottom */}
      <TouchableOpacity style={styles.selectButton} onPress={handleSeatSelectionNav}>
        <Text style={styles.selectButtonText}>Select Seats</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShowTimesScreen;
