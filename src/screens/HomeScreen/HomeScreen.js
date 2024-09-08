import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text } from 'react-native';
import styles from './styles';
import Header from '../../components/headers/HeaderwithSearchbar/Header';
import Searchbar from '../../components/headers/SearchBar/searchbar';
import Categories from '../../components/Categories/Categories';
import Movies from '../../components/lists/Movies/Movies';
import SearchResults from '../../components/lists/SearchResults/SearchResults';
const HomeScreen = ({ navigation }) => {
  const [check, setcheck] = useState("movies")
  const [checkresults, setcheckresults] = useState(true)
  const [movietitle, setmovietitle] = useState('')
  const [results, setresults] = useState()
  function handlecheck() {
    setcheck("categories")
  }
  function handleResultscheck(value) {
    setcheckresults(false)
    setmovietitle(value)
  }
  function handleResults() {
    console.log(results)
    navigation.navigate("FilteredResults", { results: results })
  }

  function handleclose() {
    setcheck('movies')
  }
  function handleSendResults(filteredResults) {
    console.log(filteredResults)
    setresults(filteredResults);
  }
  return (
    <View style={styles.container}>

      {
        check == "movies" ?
          (
            <View>
              <Header onpress={() => handlecheck()} />
              <Movies />
            </View>
          ) :
          check === "categories" ?
            (
              <View>
                <Searchbar onpress={(value) => handleResultscheck(value)} onend={() => handleResults()} onclose={() => handleclose()} />
                {
                  checkresults ?
                    <Categories /> :
                    <View style={styles.container}>
                      <Text style={styles.sectionTitle}>Top Results</Text>
                      <View style={styles.horizontalLine} />
                      <SearchResults onpress={() => handleGetTicketNav()} text={movietitle} onSendResults={(filteredResults) => handleSendResults(filteredResults)} navigation={navigation} />
                    </View>
                }
              </View>
            ) : null
      }
    </View>
  );
};
export default HomeScreen;
