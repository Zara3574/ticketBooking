import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  legend: {
    flexDirection: 'row',
    padding: 10
  },
  legendItem: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 20,
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
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black'
  },
  price:
  {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  proceedButton: {
    alignItems: 'center',
    backgroundColor: '#00aaff',
    paddingVertical: 19.5,
    borderRadius: 10,
    width: '60%',
    marginLeft: 10
  },
  proceedButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  seatslabel:
  {
    color: '#000',
    marginLeft: 10
  },
  priceView:
  {
    alignItems: 'center',
    backgroundColor: '#ededed',
    paddingVertical: 10,
    borderRadius: 10,
    width: '30%',
  }

});