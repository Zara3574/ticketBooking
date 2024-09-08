import { StyleSheet } from "react-native";

export default styles=StyleSheet.create(
    {
        resultItem: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15,
            backgroundColor: '#f8f8f8',
            padding: 15,
            borderRadius: 10,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 8,
            elevation: 3, // for Android
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
    }
)