import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      marginBottom: 16,
      alignItems: 'center',
      margin:20
    },
    movieTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
    subTitle: {
      marginTop: 5,
      fontSize: 16,
      color: '#58b9f5',
    },
    screenSection: {
      alignItems: 'center',
      marginBottom: 20,
      marginTop:30
    },
    screenLabel: {
      fontSize: 14,
      color: '#888',
    },
    screenCurve: {
      width: '80%',
      height: 5,
      backgroundColor: '#ccc',
      borderRadius: 10,
      marginTop: 10,
    },
    seatLayout: {
      marginVertical: 20,
    },
    seatRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 5,
    },
    seat: {
      width: 10,
      height: 10,
      marginHorizontal: 5,
    },
    legend: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 20,
    },
    legendItem: {
      alignItems: 'center',
    },
    legendColorBox: {
      width: 20,
      height: 20,
      marginBottom: 5,
      borderRadius: 5,
    },
    seatPicker: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 20,
    },
    pickerLabel: {
      fontSize: 16,
    },
    pickerButton: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#f0f0f0',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 30,
    },
    totalPrice: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    proceedButton: {
      backgroundColor: '#00aaff',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 10,
    },
    proceedButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });