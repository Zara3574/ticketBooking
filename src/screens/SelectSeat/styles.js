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
    margin: 20
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
    marginTop: 30,
   
  },
  screenLabel: {
    fontSize: 14,
    color: '#888',
    marginTop:-10
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
    padding:10
  },
  legendItem: {
    flexDirection:'row',
    marginTop:10,
    marginHorizontal:20,
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
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  totalPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color:'black'
  },
  price:
  {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black'
  },
  proceedButton: {
    alignItems:'center',
    backgroundColor: '#00aaff',
    paddingVertical: 19.5,
    borderRadius: 10,
    width:'60%',
    marginLeft:10
  },
  proceedButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  zoomControls: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 10,
},
zoomButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    padding: 7,
    backgroundColor: '#fff',
    borderRadius: 10,
},
seatslabel:
{
  color:'#000',
  marginLeft:10
},
priceView:
{
  alignItems:'center',
  backgroundColor: '#ededed',
  paddingVertical: 10,
  borderRadius: 10,
  width:'30%',
}

});