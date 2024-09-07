import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    header: {
        flexDirection: 'row',
        marginBottom: 16,
        padding: 20,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    movieTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'

    },
    subTitle: {
        marginTop: 5,
        fontSize: 16,
        color: '#58b9f5',
    },
    dateSection: {
        marginBottom: 16,
        margin: 15
    },
    dateLabel: {
        fontSize: 20,
        marginBottom: 8,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 30,
    },
    dateButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 10,
        backgroundColor: '#d2d3d4',
        marginRight: 10,
        color: 'black'
    },
    selectedDate: {
        backgroundColor: '#00aaff',
        shadowColor: '#00aaff',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        elevation: 50,
    },
    dateText: {
        fontSize: 16,
    },
    showtimesSection: {
        marginBottom: 16,
        margin: 15,
    },
    showtimeContainer: {
        marginHorizontal: 10,
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
    seatImage: {
        width: 220,
        height: 140,
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
    priceText: {
        marginTop: 10,
        fontSize: 15,
        color: '#333',
    },
    selectButton: {
        backgroundColor: '#00aaff',
        paddingVertical: 16,
        borderRadius: 10,
        alignItems: 'center',
        margin: 20
    },
    selectButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});
