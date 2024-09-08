import { StyleSheet } from "react-native";

export default styles = StyleSheet.create(
    {
        screenSection: {
            alignItems: 'center',
            marginBottom: 20,
            marginTop: 30,

        },
        screenLabel: {
            fontSize: 14,
            color: '#888',
            marginTop: -10
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
    }
)