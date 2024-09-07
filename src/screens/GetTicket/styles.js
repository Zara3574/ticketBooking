import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
    },
    bannerImage: {
        width: '100%',
        height: 450,
    },
    overlay: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Semi-transparent background
        padding: 10,
        borderRadius: 8,
        alignItems:'center'
    },
    movieTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    releaseDate: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        fontFamily:'Kanit-ExtraLight'
    },
    movieInfo: {
        padding: 15,
        alignItems: 'center',
    },
    buttonContainer: {
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    },
    getTicketsButton: {
        flex: 1,
        backgroundColor: '#6dcdde',
        padding: 15,
        borderRadius: 10,
        width: '70%',
        alignItems: 'center',
    },
    getTicketsText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    watchTrailerButton: {
        flex: 1,
        borderColor: '#6dcdde',
        borderWidth: 2,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '70%',
        marginTop: 10
    },
    watchTrailerText: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    genresSection: {
        paddingHorizontal: 15,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black'
    },
    genresContainer: {
        flexDirection: 'row',
    },
    genreTag: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 10,
    },
    genreText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    overviewSection: {
        padding: 15,
    },
    overviewText: {
        fontSize: 14,
        color: '#424242',
        lineHeight: 20,
    },
});
