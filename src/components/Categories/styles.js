import { StyleSheet } from "react-native";

export default styles=StyleSheet.create
({
    columnWrapper: {
        justifyContent: 'space-between',
      },
      contentContainer: {
        paddingBottom: 80,
      },
      item: {
        flex: 1,
        margin: 10,
        height: 120,
      },
      image: {
        flex: 1,
        justifyContent: 'flex-end',
      },
      overlay: {
        backgroundColor: 'rgba(0,0,0,0)',
        padding: 16,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
      title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
})