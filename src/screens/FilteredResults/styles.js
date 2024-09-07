import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headercontainer:
    {
        flexDirection:'row',
        alignItems:'center',
        padding:20
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 30,
    },
    resultsContainer: {
        paddingBottom: 20,
    },
    resultItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        padding: 15,
        borderRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 3, // for Android
        marginTop:20,
        marginHorizontal:15
    },
    resultImage: {
        width: 120,
        height: 80,
        borderRadius: 10,
    },
    resultInfo: {
        flex: 1,
        marginLeft: 10,
    },
    resultTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',

    },
    resultCategory: {
        fontSize: 14,
        color: 'gray',
    },
    moreButton: {
        padding: 10,
    },
    
    icon:
    {
    },
    fontStyle:
    {
        fontSize: 20,
        color: "black",
        marginLeft:15
    }
});
