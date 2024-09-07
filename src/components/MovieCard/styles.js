import { StyleSheet } from "react-native";

export default styles = StyleSheet.create(
    {
        card: {
            marginBottom: 16,
            borderRadius: 8,
            overflow: 'hidden',
            backgroundColor: '#f5f5f5',
            marginTop:10
          },
          image: {
            width: '100%',
            height: 165,
            resizeMode: 'cover',
          },
          overlay: {
            position: 'absolute', // Ensures the text is over the image
            bottom: 0, // Positions the text at the bottom of the image
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background to make text readable
            padding: 5,
          },
          title: {
            fontSize: 20,
            fontWeight: 'bold',
            margin: 8,
            color: 'white'
          },
    }
)