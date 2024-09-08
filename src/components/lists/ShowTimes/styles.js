import { StyleSheet } from "react-native";

export default styles = StyleSheet.create(
    {
        showtimeContainer: {
            marginHorizontal: 10,
        },
        showtimeInfo: {
            flexDirection: 'row'
        },
        showtimeText: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#000',
            marginRight: 20
        },
        hallText: {
            fontSize: 16,
            color: '#888',
            marginBottom: 8,
        },
        showtimeBox: {
            borderWidth: 1,
            borderColor: '#00aaff',
            borderRadius: 10,
            paddingVertical: 20,
            paddingHorizontal: 40,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        priceText: {
            marginTop: 10,
            fontSize: 15,
            color: '#333',
        },
        showtimesSection: {
            marginBottom: 16,
            margin: 15,
        },
        seatImage: {
            width: 220,
            height: 140,
        },
    }
)