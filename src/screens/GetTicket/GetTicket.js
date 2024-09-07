import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

const GetTicket = ({ navigation,route }) => {
  const { item } = route.params;
  const genres = [
    { name: 'Action', backgroundColor: '#00c853' },
    { name: 'Thriller', backgroundColor: '#ff5252' },
    { name: 'Science', backgroundColor: '#6200ea' },
    { name: 'Fiction', backgroundColor: '#ff9800' },
  ];
  function showtimeScreenNav()
  {
    navigation.navigate("ShowTimeSreen")
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image with overlay */}
      <View>
        <Image source={item.image} style={styles.bannerImage} />
        <View style={styles.overlay}>
          <Text style={styles.movieTitle}>{item.title}</Text>
          <Text style={styles.releaseDate}>In Theaters December 22, 2021</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.getTicketsButton} onPress={()=>
              showtimeScreenNav()
            }>
              <Text style={styles.getTicketsText}>Get Tickets</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.watchTrailerButton}>
              <Text style={styles.watchTrailerText}>Watch Trailer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Genres Section */}
      <View style={styles.genresSection}>
        <Text style={styles.sectionTitle}>Genres</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.genresContainer}>
        {genres.map((genre, index) => (
            <View key={index} style={[styles.genreTag, { backgroundColor: genre.backgroundColor }]}>
              <Text style={styles.genreText}>{genre.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Overview Section */}
      <View style={styles.overviewSection}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <Text style={styles.overviewText}>
          As A Collection Of History’s Worst Tyrants And Criminal Masterminds Gather To Plot A War To
          Wipe Out Millions, One Man Must Race Against Time To Stop Them. Discover The Origins Of The
          Very First Independent Intelligence Agency In The King’s Man.
        </Text>
      </View>
    </ScrollView>
  );
};

export default GetTicket;
