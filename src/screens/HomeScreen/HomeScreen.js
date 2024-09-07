import React, { useState } from 'react';
import { View, KeyboardAvoidingView,Text } from 'react-native';
import styles from './styles';
import Header from '../../components/Header/Header';
import Searchbar from '../../components/SearchBar/searchbar';
import Categories from '../../components/Categories/Categories';
import Movies from '../../components/Movies/Movies';
import SearchResults from '../../components/SearchResults/SearchResults';
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
  function handleGetTicketNav() {

    navigation.navigate("Getticket")
  }
  function handleclose() {
    setcheck('movies')
  }
  function handleSendResults(filteredResults) {
    console.log(filteredResults)
    setresults(filteredResults);
    //handleResults(); // Optionally call handleResults or navigate here
  }
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
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
                        <SearchResults onpress={() => handleGetTicketNav()} text={movietitle} onSendResults={(filteredResults) => handleSendResults(filteredResults)} />
                      </View>
                  }
                </View>
              ) : null
        }
      </KeyboardAvoidingView>
    </View>
  );
};
export default HomeScreen;
