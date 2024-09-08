import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1, // Ensures the content can stretch
        backgroundColor: '#f0f0f0',
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
    selectButton: {
        backgroundColor: '#00aaff',
        paddingVertical: 16,
        borderRadius: 10,
        alignItems: 'center',
        margin: 20,
    },
    selectButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});
